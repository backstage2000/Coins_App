import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../service/getCoins";
import { MINUTES } from "@utils";

export default function useGetCoins({ page = 1, perPage = 20 } = {}) {
  return useQuery({
    queryKey: ["coins", page, perPage],
    queryFn: () => getCoins({ page, perPage }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,

    staleTime: 1 * MINUTES,
    gcTime: 5 * MINUTES,
    refetchInterval: 1 * MINUTES,
    retry: 1,
  });
}
