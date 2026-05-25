import { HomeOutlined } from "@ant-design/icons";
import { Coins } from "lucide-react";
import Home from "../pages/Home.jsx";
import CoinsPage from "../pages/CoinsPage.jsx";
import CoinsPagePaged from "../pages/CoinsPagePaged.jsx";

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
];
