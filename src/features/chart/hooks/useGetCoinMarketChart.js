import { useQuery } from "@tanstack/react-query";
import { getCoinMarketChart } from "../service/getCoinMarketChart";
import { MINUTES } from "@utils";

export default function useCoinMarketChart({ coinId = "bitcoin", days = 7 }) {
  return useQuery({
    queryKey: ["coin-chart", coinId, days],

    queryFn: () =>
      getCoinMarketChart({
        id: coinId,
        days,
      }),

    staleTime: 1 * MINUTES,
    gcTime: 5 * MINUTES,
    refetchOnWindowFocus: false,
    refetchInterval: 0.2 * MINUTES,
    retry: 1,
  });
}
