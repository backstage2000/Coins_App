import { useState } from "react";
import { useGetCoins } from "@features/coins/hooks";
import { useCoinMarketChart } from "@features/chart/hooks";
import { DashboardCard } from "@components";
import { useManualRefetch } from "@hooks";
import { mapChartData } from "@utils";

export default function ChartPage() {
  const [type, setType] = useState("price");
  const [coin, setCoin] = useState("bitcoin");
  const [period, setPeriod] = useState("7d");

  const {
    data: coinMarketData,
    isLoading,
    isRefetching,
    refetch,
  } = useCoinMarketChart({
    coinId: coin,
    days: period,
  });

  const { data: coinsData = [] } = useGetCoins();

  const { isManualRefetching, handleRefetch } = useManualRefetch(refetch);

  const COINS = coinsData.map((c) => ({
    label: c.name,
    value: c.id,
  }));

  const chartData = coinMarketData ? mapChartData(coinMarketData, period) : [];

  return (
    <DashboardCard
      coin={coin}
      setCoin={setCoin}
      period={period}
      setPeriod={setPeriod}
      type={type}
      setType={setType}
      chartData={chartData}
      coinsSelected={COINS}
      onRefetch={handleRefetch}
      isLoading={isLoading}
      isRefetching={isRefetching}
      isManualRefetching={isManualRefetching}
    />
  );
}
