import "./styles/_all.scss";
import { lazy, Suspense } from "react";
import { FloatButton } from "antd";
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom/client";
import Loading from "./components/Loading/index.tsx";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore.ts";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx";
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated/RedirectIfAuthenticated.tsx";
import TestTemplate from "./Templates/TestTemplate.tsx";

const AdminTemplate = lazy(() => import("./Templates/AdminTemplate.tsx"));
const ExcelTemplate = lazy(() => import("./components/ExportExcel/ExportExcel.tsx"));
const Login = lazy(() => import("./pages/Login/Login.tsx"));
const User = lazy(() => import("./pages/User/User.tsx"));
const Job = lazy(() => import("./pages/Job/Job.tsx"));
const TypeJob = lazy(() => import("./pages/TypeJob/TypeJob.tsx"));
const Skill = lazy(() => import("./pages/Skill/Skill.tsx"));
const Statistical = lazy(() => import("./pages/Statistical/Statistical.tsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.tsx"));

export const routeLink: any = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <HistoryRouter history={routeLink}>
        <Routes>
          <Route path="/" element={<Navigate to="/user" replace />} />

          <Route element={<ProtectedRoute requiredRole={"ROLE_ADMIN"} />}>
            <Route path="/*" element={<AdminTemplate />}> {/* Sử dụng `path="/*"` để hỗ trợ các route con */}
              <Route path="user" element={<User />} />
              <Route path="job" element={<Job />} />
              <Route path="typejob/:id" element={<TypeJob />} />
              <Route path="skill/:teamId" element={<Skill />} />
              <Route path="statistical" element={<Statistical />} />
            </Route>

            <Route path="excel" element={<ExcelTemplate />} />
            <Route path="test" element={<TestTemplate />} />
          </Route>

          {/* Sử dụng RedirectIfAuthenticated để chặn truy cập vào trang login nếu đã đăng nhập */}
          <Route path="/login" element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          } />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </Suspense>
    <FloatButton.BackTop tooltip={<div>Back to top</div>} />
    <ToastContainer />
  </Provider>
);
