import { HomeOutlined, FormOutlined } from "@ant-design/icons";
import { Coins, ChartCandlestick } from "lucide-react";
import Home from "../pages/Home.jsx";
import CoinsPage from "../pages/CoinsPage.jsx";
import CoinsPagePaged from "../pages/CoinsPagePaged.jsx";
import ChartPage from "../pages/ChartPage.jsx";
import FormPage from "../pages/FormPage.jsx";
export const routes = [
  { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
  {
    path: "/coin",
    label: "Coin",
    icon: <Coins size={18} />,
    element: <CoinsPage />,
  },
  {
    path: "/coins-paged",
    label: "Coins-paged",
    icon: <Coins size={18} />,
    element: <CoinsPagePaged />,
  },
  {
    path: "/chart",
    label: "Chart",
    icon: <ChartCandlestick size={18} />,
    element: <ChartPage />,
  },
  {
    path: "/wizard",
    label: "Wizard",
    icon: <FormOutlined />,
    element: <FormPage />,
  },
];
