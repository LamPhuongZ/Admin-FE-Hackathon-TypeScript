import { Navigate } from "react-router-dom";
import { getDataTextStorage } from "../../Utils/utilMethod";
import { ACCESS_TOKEN } from "../../Utils/config";

// Component để kiểm tra token và điều hướng nếu người dùng đã đăng nhập
const RedirectIfAuthenticated = ({ children }: { children: JSX.Element }) => {
  const accessToken = getDataTextStorage(ACCESS_TOKEN);

  if (accessToken) {
    // Nếu đã có token thì điều hướng đến trang user
    return <Navigate to="/user" replace />;
  }

  return children; // Nếu chưa có token, render nội dung bên trong (trang login)
};

export default RedirectIfAuthenticated;
