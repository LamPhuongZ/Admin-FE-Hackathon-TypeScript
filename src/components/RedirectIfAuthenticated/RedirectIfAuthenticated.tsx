import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/configStore";

// Component để kiểm tra token và điều hướng nếu người dùng đã đăng nhập
const RedirectIfAuthenticated = ({ children }: { children: JSX.Element }) => {
  const { token } = useSelector((state: RootState) => state.authReducer);

  if (token) {
    // Nếu đã có token thì điều hướng đến trang chủ
    return <Navigate to="/" replace />; 
  }

  return children; // Nếu chưa có token, render nội dung bên trong (trang login)
};

export default RedirectIfAuthenticated;
