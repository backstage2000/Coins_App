import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "https://api.coingecko.com/api/v3",
});

export default apiClient;
