import { HomeOutlined, FormOutlined } from "@ant-design/icons";
import { Coins, ChartCandlestick } from "lucide-react";
import { ChartPage, CoinsPage, CoinsPagePaged, Home, FormPage } from "@pages";

const routes = [
  { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
  {
    path: "/coins",
    label: "Coins",
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

export default routes;
