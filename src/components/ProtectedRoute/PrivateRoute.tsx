// CODE MẪU ĐỂ GIÚP DỄ HIỂU HƠN VỀ PHẦN PROTECEDD ROUTE NÀY !!!
import { Navigate, Outlet } from 'react-router-dom';


// Giả sử bạn đang lưu trữ token trong localStorage hoặc Redux
const useAuth = () => {
  const token = localStorage.getItem('token');  // Hoặc lấy từ Redux nếu bạn lưu trong Redux
  return !!token;                               // Trả về true nếu token tồn tại
};


const PrivateRoute = () => {
  const isAuth = useAuth();
  
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
