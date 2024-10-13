import "./styles/_all.scss";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { FloatButton } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AdminTemplate from "./templates/AdminTemplate";
import Loading from "./components/loading";
import store from "./redux/store";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<AdminTemplate />}></Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    <FloatButton.BackTop tooltip={<div>Back to top</div>} />
  </Provider>
);
