import "./styles/_all.scss";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { FloatButton } from "antd";
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom/client";
import Loading from "./components/loading";
import store from "./redux/store";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx";

const AdminTemplate = lazy(() => import("./templates/AdminTemplate"));
const ExcelTemplate = lazy(() => import("./templates/ExportExcel"));
const Login = lazy(() => import("./pages/Login/index.tsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export const routeLink: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <HistoryRouter history={routeLink}>
        <Routes>
          {/* Admin routes with protected access */}
          <Route element={<ProtectedRoute requiredRole={"ROLE_ADMIN"} />}>
            <Route path="" element={<AdminTemplate />} />
            <Route path="excel" element={<ExcelTemplate />} />
          </Route>

          {/* Public login route */}
          <Route path="/login" element={<Login />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </Suspense>
    <FloatButton.BackTop tooltip={<div>Back to top</div>} />
  </Provider>
);
