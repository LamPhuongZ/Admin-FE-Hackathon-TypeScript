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
  sub: string;
  iat: number;
  exp: number;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole }) => {
  const accessToken = getDataTextStorage(ACCESS_TOKEN);  

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  try {
    // Giải mã JWT token
    const decodedToken: UserLogin = jwtDecode(accessToken);

    // Kiểm tra nếu token đã hết hạn
    const currentTime = Date.now() / 1000; // Lấy thời gian hiện tại tính bằng giây
    if (decodedToken.exp < currentTime) {
      // Token hết hạn, chuyển hướng đến trang đăng nhập
      localStorage.removeItem(ACCESS_TOKEN)
      return <Navigate to="/login" />;
    }

    // Kiểm tra nếu vai trò người dùng không khớp với vai trò yêu cầu
    if (decodedToken.role !== requiredRole) {
      return <Navigate to="/" />; // Đá về trang chủ nếu vai trò không khớp
    }

  } catch (error) {
    // Nếu việc giải mã token thất bại, chuyển hướng đến trang đăng nhập
    console.error("Invalid token", error);
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Hiển thị route được bảo vệ nếu vai trò khớp
};

export default ProtectedRoute;
