import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./index.css";
import { ReactQueryDevtools, theme } from "@config";
import QueryClientProvider from "@store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider>
      <ReactQueryDevtools />
      <ConfigProvider
        theme={{
          algorithm: theme.compactAlgorithm,
          ...theme,
        }}
      >
        <App />
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>,
);
