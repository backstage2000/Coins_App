import { apiClient } from "@config";

export async function getCoins({ page = 1, perPage = 20 } = {}) {
  const { data } = await apiClient.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      per_page: perPage,
      page: page,
    },
  });

  return data;
}
