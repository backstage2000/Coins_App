import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { Card, Select, Segmented } from "antd";
import { useMemo, useState } from "react";

/**
 * MOCK DATA (base)
 */
const mockChartData = Array.from({ length: 30 }).map((_, i) => {
  const base = 100;

  return {
    time: `Day ${i + 1}`,
    price: base + Math.random() * 20 + i,
    marketCap: 1_000_000 + Math.random() * 200_000 + i * 10_000,
    volume: 50_000 + Math.random() * 20_000 + i * 2_000,
  };
});

/**
 * Chart component
 */
export function ChartPage({ data, type }) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="time" stroke="#999" />
        <YAxis />
        <Tooltip formatter={(v) => `$${Number(v).toLocaleString()}`} />
        <CartesianGrid stroke="#f5f5f5" />

        <Line
          type="monotone"
          dataKey={type}
          stroke="#1677ff"
          dot={false}
          strokeWidth={2}
          isAnimationActive
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

/**
 * Dashboard
 */
export default function CryptoDashboardMock() {
  const [type, setType] = useState("price");
  const [coin, setCoin] = useState("bitcoin");
  const [period, setPeriod] = useState("7d");

  /**
   * имитация разных монет (пока mock)
   */
  const chartData = useMemo(() => {
    const multiplier = coin === "bitcoin" ? 1 : coin === "ethereum" ? 0.8 : 0.6;

    const days = period === "1d" ? 1 : period === "7d" ? 7 : 30;

    return mockChartData
      .slice(0, days * 10) // имитация периода
      .map((item) => ({
        ...item,
        price: item.price * multiplier,
        marketCap: item.marketCap * multiplier,
        volume: item.volume * multiplier,
      }));
  }, [coin, period]);

  return (
    <Card
      title="Crypto Dashboard (Mock)"
      extra={
        <div style={{ display: "flex", gap: 12 }}>
          {/* COIN SWITCHER */}
          <Segmented
            value={coin}
            onChange={setCoin}
            options={[
              { label: "BTC", value: "bitcoin" },
              { label: "ETH", value: "ethereum" },
              { label: "SOL", value: "solana" },
            ]}
          />
          <Segmented
            value={period}
            onChange={setPeriod}
            options={[
              { label: "1D", value: "1d" },
              { label: "7D", value: "7d" },
              { label: "30D", value: "30d" },
            ]}
          />

          {/* TYPE SWITCHER */}
          <Select
            value={type}
            onChange={setType}
            style={{ width: 160 }}
            options={[
              { value: "price", label: "Price" },
              { value: "marketCap", label: "Market Cap" },
              { value: "volume", label: "Volume" },
            ]}
          />
        </div>
      }
    >
      <ChartPage data={chartData} type={type} />
    </Card>
  );
}
