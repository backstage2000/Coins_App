import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Space, Typography, theme as antTheme } from "antd";

function PriceChangeCell({ value }) {
  const { Text } = Typography;
  const { useToken } = antTheme;
  const { token } = useToken();

  const isPositive = value >= 0;
  return (
    <Text
      style={{
        color: isPositive ? token.colorSuccess : token.colorError,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      <Space size={3}>
        {isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        {Math.abs(value).toFixed(2)}%
      </Space>
    </Text>
  );
}

export default PriceChangeCell;
