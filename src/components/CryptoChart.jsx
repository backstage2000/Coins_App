import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import format from "../utils/format";

export default function CryptoChart({ data, type }) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="time" stroke="#999" />
        <YAxis tickFormatter={format.formatPrice} />
        <Tooltip formatter={format.formatPrice} />
        <CartesianGrid stroke="#f5f5f5" />

        <Line
          type="monotone"
          dataKey={type}
          stroke="#1677ff"
          dot={false}
          strokeWidth={2}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
