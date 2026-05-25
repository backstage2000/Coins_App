import { Button, Card, Segmented, Select, Spin } from "antd";
import { RefreshCw } from "lucide-react";
import { CryptoChart, CryptoChartSkeleton } from "@components";

const PERIODS = [
  { label: "1D", value: "1d" },
  { label: "7D", value: "7d" },
  { label: "30D", value: "30d" },
];

const TYPES = [
  { value: "price", label: "Price" },
  { value: "marketCap", label: "Market Cap" },
  { value: "volume", label: "Volume" },
];

export default function DashboardCard({
  coinsSelected,
  coin,
  setCoin,
  period,
  setPeriod,
  type,
  setType,
  chartData,
  onRefetch,
  isLoading,
  isRefetching,
  isManualRefetching,
}) {
  return (
    <>
      {isLoading && !isRefetching ? (
        <CryptoChartSkeleton />
      ) : (
        <Card
          title="Crypto Dashboard"
          extra={
            <div style={{ display: "flex", gap: 12 }}>
              <Button
                onClick={onRefetch}
                icon={<RefreshCw color="#1677ff" />}
                loading={isManualRefetching}
                title="Refresh Chart"
              />

              <Select
                style={{ width: 160 }}
                value={coin}
                onChange={setCoin}
                options={coinsSelected}
              />

              <Segmented
                value={period}
                onChange={setPeriod}
                options={PERIODS}
              />

              <Select
                value={type}
                onChange={setType}
                style={{ width: 160 }}
                options={TYPES}
              />
            </div>
          }
        >
          <Spin spinning={isManualRefetching} size="large">
            <CryptoChart data={chartData} type={type} />
          </Spin>
        </Card>
      )}
    </>
  );
}
