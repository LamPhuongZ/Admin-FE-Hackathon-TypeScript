import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getDataTextStorage } from "../../utils/utilMethod";
import { ACCESS_TOKEN } from "../../utils/config";
import { jwtDecode } from "jwt-decode";  

// Định nghĩa kiểu cho các props của ProtectedRoute
interface ProtectedRouteProps {
  requiredRole: string;
}

// Định nghĩa kiểu cho userLogin (sau khi giải mã từ JWT token)
interface UserLogin {
  role: string;
  sub:  string;
  iat:  number;
  exp:  number;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole }) => {
  const accessToken = getDataTextStorage(ACCESS_TOKEN);  // Lấy accessToken từ localStorage

  // Nếu không có accessToken => Chuyển hướng đến trang đăng nhập
  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  // Giải mã JWT token
  const userRole: UserLogin = jwtDecode(accessToken);
  console.log(userRole.role)

  // Kiểm tra nếu vai trò người dùng không khớp với vai trò yêu cầu
  if (userRole.role !== requiredRole) {
    switch (userRole.role) {
      case "ROLE_ADMIN":
        return <Navigate to="/" />;
      case "ROLE_EMPLOYER":
        return <Navigate to="/login" />; // Thay đổi đường dẫn nếu cần
      case "ROLE_APPLIER":
        return <Navigate to="/login" />;  // Thay đổi đường dẫn nếu cần
      default:
        return <Navigate to="/login" />; // Nếu vai trò không hợp lệ hoặc không xác định
    }
  }

  return <Outlet />; // Hiển thị route được bảo vệ nếu vai trò khớp
};

export default ProtectedRoute;
