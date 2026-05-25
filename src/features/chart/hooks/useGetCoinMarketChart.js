import { useQuery } from "@tanstack/react-query";
import { MINUTES } from "../../../utils/time";
import { getCoinMarketChart } from "../service/getCoinMarketChart";

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
    // refetchInterval: 0.2 * MINUTES,
    retry: 1,
  });
}
