import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../service/getCoins";

export function useGetCoins({ page, perPage, } = {}) {
  return useQuery({
    queryKey: ["coins", page, perPage],
    queryFn: () => getCoins({ page, perPage }),
  });
}
