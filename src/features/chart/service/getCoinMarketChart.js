import apiClient from "../../../config/axios";

export async function getCoinMarketChart({ id = "bitcoin", days = 7 }) {
  const { data } = await apiClient.get(`/coins/${id}/market_chart`, {
    params: {
      vs_currency: "usd",
      days,
    },
  });

  return data;
}
