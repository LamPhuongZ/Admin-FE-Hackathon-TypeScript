import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { routeLink } from "../main";
import { getDataJsonStorage } from "./utilMethod";
import { jwtDecode } from "jwt-decode"

//setup hằng số
export const ACCESS_TOKEN:string = 'access_token';
export const USER_LOGIN:string = 'userLogin'
export const DOMAIN:string = 'https://api.easyjob.io.vn';

//interceptor
export const httpClient:AxiosInstance = axios.create({
  baseURL:DOMAIN,
  timeout:30000
});

httpClient.interceptors.request.use((req: InternalAxiosRequestConfig<any>) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (req.headers) {
      req.headers.set('Authorization', accessToken ? `${accessToken}` : '');
  }
  return req;
}, (err: AxiosError) => {
  return Promise.reject(err);
});


//Cấu hình cho response (kết quả trả về từ api)
httpClient.interceptors.response.use(
  (response: AxiosResponse<any>) => {
      // Xử lý response thành công
      return response;
  },
  (error: AxiosError) => {
      // Xử lý lỗi response
      if (error.response) {
          // Server đã trả về một response nhưng với mã trạng thái lỗi
          switch (error.response.status) {
              case 401:

                  //Đã đăng nhập nhưng hết hạn (gọi api refresh token)
                  let decodedToken:any = jwtDecode(getDataJsonStorage(USER_LOGIN).accessToken);
                  console.log("Decoded Token", decodedToken);
                  let currentDate = new Date();

                  // JWT exp is in seconds
                  if (decodedToken.exp * 1000 < currentDate.getTime()) {
                      console.log("Token expired.");
                      //Remove userlogin trong localstorage
                      localStorage.removeItem(USER_LOGIN);
                      //Chuyển hướng về đăng nhập
                      routeLink.push('/login');
                  }
                  

                  // Xử lý lỗi 401 Unauthorized, ví dụ: chuyển hướng đến trang đăng nhập
                  alert("Unauthorized access - perhaps the user is not logged in or token expired.");
                  
                  routeLink.push('/login');

                  break;
              case 403:
                  // Xử lý lỗi 403 Forbidden
                  alert("Forbidden - you don't have permission to access this resource.");
                  
                  routeLink.push('/login');

                  break;
              case 404:
                  // Xử lý lỗi 404 Not Found
                  alert("Resource not found.");
                  break;
              case 500:
                  // Xử lý lỗi 500 Internal Server Error
                  alert("Internal server error.");
                  break;
              default:
                  // Xử lý các mã lỗi khác
                  console.error(`Error ${error.response.status}: ${error.response.statusText}`);
          }
      } else if (error.request) {
          // Request đã được gửi nhưng không nhận được phản hồi từ server
          console.error("No response received from server.");
      } else {
          // Một số lỗi khác xảy ra trong quá trình thiết lập request
          console.error("Error setting up request: ", error.message);
      }

      return Promise.reject(error);
  }
);


/* statusCode thông dụng : 
    200: Dữ liệu gửi đi và nhận về kết quả thành công (OK)
    201: Dữ liệu khởi tạo thành công (Created)
    400: Bad request (lỗi không tìm thấy item trên backend)
    404: Not found (không tìm thấy link backend)
    500: Error in server (Lỗi xảy ra tại server - có thể do dữ liệu frontend gửi lên xử lý bị lỗi backend không catch trường hợp này thì ra 500 hoặc là backend code bị lỗi) => Xác định lỗi => mở post man request thử với data đúng thì có được hay không nếu vẫn lỗi thì báo backend fix
    401: UnAuthorize (Lỗi khi không có quyền truy cập vào api này (phải token hợp lệ ...))
    403: Forbiden ( Lỗi chưa đủ quyền truy cập vào api )

*/
