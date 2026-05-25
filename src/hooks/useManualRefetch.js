import { useState } from "react";

export const useManualRefetch = (refetch) => {
  const [isManualRefetching, setIsManualRefetching] = useState(false);

  const handleRefetch = async () => {
    setIsManualRefetching(true);
    await refetch();
    setIsManualRefetching(false);
  };

  return { isManualRefetching, handleRefetch };
};
