import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getDataTextStorage, getDataJsonStorage } from "../../utils/utilMethod";
import { ACCESS_TOKEN, USER_LOGIN } from "../../utils/config";

// Định nghĩa kiểu cho các props của ProtectedRoute
interface ProtectedRouteProps {
  requiredRole: string;
}

// Định nghĩa kiểu cho userLogin (phải khớp với cấu trúc dữ liệu user của bạn)
interface UserLogin {
  role: string;
  // Các thuộc tính khác của user (nếu có)
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole }) => {
  const accessToken = getDataTextStorage(ACCESS_TOKEN); // Lấy accessToken từ localStorage
  const userLogin = getDataJsonStorage(USER_LOGIN) as UserLogin | null; // Lấy thông tin user từ localStorage

  
  // Nếu không có accessToken hoặc userLogin => Chuyển hướng đến trang đăng nhập
  if (!accessToken || !userLogin) {
    return <Navigate to="/" />;
  }

  const userRole = userLogin.role;

  // Kiểm tra nếu vai trò người dùng không khớp với vai trò yêu cầu
  if (userRole !== requiredRole) {
    switch (userRole) {
      case "Administrator":
        return <Navigate to="/admin" />;
      case "Student":
        return <Navigate to="/student" />;
      case "Instructor":
        return <Navigate to="/instructor" />;
      case "Manager":
        return <Navigate to="/manager" />;
      default:
        return <Navigate to="/" />; // Nếu vai trò không hợp lệ hoặc không xác định
    }
  }

  return <Outlet />; // Hiển thị route được bảo vệ nếu vai trò khớp
};

export default ProtectedRoute;


