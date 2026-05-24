import { Space, Typography } from "antd";
const { Text } = Typography;

function CoinCell({ name, symbol, image }) {
  return (
    <Space size={10}>
      <img
        src={image}
        alt={name}
        width={28}
        height={28}
        style={{ borderRadius: "50%", display: "block" }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <Space direction="vertical" size={0}>
        <Text strong>{name}</Text>
        <Text type="secondary">{symbol}</Text>
      </Space>
    </Space>
  );
}

export default CoinCell;
