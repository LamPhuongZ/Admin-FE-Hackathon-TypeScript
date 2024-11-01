import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { routeLink } from "../main";
import { getDataTextStorage } from "./utilMethod";
import { jwtDecode } from "jwt-decode";

// Constants
export const ACCESS_TOKEN: string = 'access_token';
export const USER_LOGIN: string = 'userLogin';
export const DOMAIN: string = 'https://api.easyjob.io.vn';

// Create Axios instance with default settings
export const httpClient: AxiosInstance = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
});

// Check token expiration
function isTokenExpired(token: string): boolean {
    try {
        const decodedToken: any = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp < currentTime;
    } catch (error) {
        console.error("Error decoding token:", error);
        return true; // Assume expired if decoding fails
    }
}

// ==================================================
//              Request Interceptor
// ==================================================
httpClient.interceptors.request.use(
    (req: InternalAxiosRequestConfig<any>) => {
        // ⭐ kiểm tra token có lưu trong localStorage hay không trước
        const accessToken = getDataTextStorage(ACCESS_TOKEN);

        if (accessToken) {
            // Check if token is expired
            if (isTokenExpired(accessToken)) {
                console.log("Token expired. Redirecting to login.");
                localStorage.removeItem(ACCESS_TOKEN);
                localStorage.removeItem(USER_LOGIN);
                alert("Your session has expired. Please log in again.");
                routeLink.push('/login');
                throw new axios.Cancel("Token expired"); // Cancel the request
            }
            req.headers.Authorization = `Bearer ${accessToken}`;
        }
        return req;
    },
    (err: AxiosError) => Promise.reject(err)
);


// ==================================================
//               Response Interceptor
// ==================================================
httpClient.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    (error: AxiosError) => {
        if (error.response) {
            const { status } = error.response;

            switch (status) {
                case 401:
                    handleUnauthorizedError();
                    break;

                case 403:
                    alert("Forbidden - you don't have permission to access this resource.");
                    routeLink.push('/login');
                    break;

                case 404:
                    alert("Resource not found.");
                    break;

                case 500:
                    alert("Internal server error.");
                    break;

                default:
                    console.error(`Error ${status}: ${error.response.statusText}`);
            }
        } else if (error.request) {
            console.error("No response received from server.");
        } else {
            console.error("Error setting up request:", error.message);
        }

        return Promise.reject(error);
    }
);

// Handle 401 Unauthorized error
function handleUnauthorizedError() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_LOGIN);
    alert("Unauthorized access. Please log in.");
    routeLink.push('/login');
}




/* statusCode thông dụng : 
    200: Dữ liệu gửi đi và nhận về kết quả thành công (OK)
    201: Dữ liệu khởi tạo thành công (Created)
    400: Bad request (lỗi không tìm thấy item trên backend) => FE sai hoặc BE sai
    401: UnAuthorize (Lỗi khi không có quyền truy cập vào api này (phải token hợp lệ ...))
    403: Forbiden ( Lỗi chưa đủ quyền truy cập vào api )
    404: Not found (không tìm thấy link backend)
    500: Error in server (Lỗi xảy ra tại server - có thể do dữ liệu frontend gửi lên xử lý bị lỗi backend không catch trường hợp này thì ra 500 hoặc là backend code bị lỗi) => Xác định lỗi => mở post man request thử với data đúng thì có được hay không nếu vẫn lỗi thì báo backend fix

*/
