import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getDataTextStorage } from "../../utils/utilMethod";
import { ACCESS_TOKEN } from "../../utils/config";
import { jwtDecode } from "jwt-decode";

// Định nghĩa kiểu cho các props của ProtectedRoute
interface ProtectedRouteProps {
  requiredRole: string;
}

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
    const decodedToken: UserLogin = jwtDecode(accessToken);

    const currentTime = Date.now() / 1000; // Lấy thời gian hiện tại tính bằng giây
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem(ACCESS_TOKEN)
      return <Navigate to="/login" />;
    }

    if (decodedToken.role !== requiredRole) {
      return <Navigate to="/" />; 
    }

  } catch (error) {
    // Nếu việc giải mã token thất bại, chuyển hướng đến trang đăng nhập
    console.error("Invalid token", error);
    localStorage.removeItem(ACCESS_TOKEN)
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Hiển thị route được bảo vệ nếu vai trò khớp
};

export default ProtectedRoute;
