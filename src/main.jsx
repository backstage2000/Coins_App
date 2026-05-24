import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import { theme } from "./config/theme.js";
import "./index.css";
import QueryClientProvider from "./store.jsx";
import ReactQueryDevtools from "./config/ReactQueryDevtools.jsx";

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
