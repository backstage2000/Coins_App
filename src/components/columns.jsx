import format from "../utils/format";
import CoinCell from "./CoinCell";
import PriceChangeCell from "./PriceChangeCell";

import { Typography } from "antd";

const { Text } = Typography;

const columns = [
  {
    title: "#",
    dataIndex: "market_cap_rank",
    key: "market_cap_rank",
    width: 60,
    sorter: (a, b) => a.market_cap_rank - b.market_cap_rank,
    render: (rank) => <Text type="secondary">{rank}</Text>,
  },
  {
    title: "Назва",
    dataIndex: "name",
    key: "name",
    width: 200,
    render: (name, record) => (
      <CoinCell name={name} symbol={record.symbol} image={record.image} />
    ),
  },
  {
    title: "Ціна",
    dataIndex: "current_price",
    key: "current_price",
    width: 130,
    align: "right",
    sorter: (a, b) => a.current_price - b.current_price,
    render: (price) => (
      <Text strong style={{ fontVariantNumeric: "tabular-nums" }}>
        {format.price(price)}
      </Text>
    ),
  },
  {
    title: "24h %",
    dataIndex: "price_change_percentage_24h",
    key: "price_change_percentage_24h",
    width: 110,
    align: "right",
    sorter: (a, b) =>
      a.price_change_percentage_24h - b.price_change_percentage_24h,
    render: (pct) => <PriceChangeCell value={pct} />,
  },
  {
    title: "Market Cap",
    dataIndex: "market_cap",
    key: "market_cap",
    width: 150,
    align: "right",
    sorter: (a, b) => a.market_cap - b.market_cap,
    render: (cap) => (
      <Text style={{ fontVariantNumeric: "tabular-nums" }}>
        {format.compact(cap)}
      </Text>
    ),
  },
  {
    title: "Обʼєм 24h",
    dataIndex: "total_volume",
    key: "total_volume",
    width: 150,
    align: "right",
    sorter: (a, b) => a.total_volume - b.total_volume,
    render: (vol) => (
      <Text style={{ fontVariantNumeric: "tabular-nums" }}>
        {format.compact(vol)}
      </Text>
    ),
  },
];

export default columns;
