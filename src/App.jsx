import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import { routes } from "@config";
import { Suspense } from "react";
import { Spin } from "antd";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route element={<AppLayout />}>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
