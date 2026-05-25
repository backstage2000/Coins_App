import { useState } from "react";

const useManualRefetch = (refetch) => {
  const [isManualRefetching, setIsManualRefetching] = useState(false);

  const handleRefetch = async () => {
    setIsManualRefetching(true);
    await refetch();
    setIsManualRefetching(false);
  };

  return { isManualRefetching, handleRefetch };
};


export default useManualRefetch;