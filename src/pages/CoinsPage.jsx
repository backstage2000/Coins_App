import { useState } from "react";
import { Table } from "antd";
import columns from "../components/columns";
import { useGetCoins } from "../features/coins/hooks/useGetCoins";

export default function CoinsPage() {
  const [, setSortField] = useState(null);
  const [, setSortOrder] = useState(null);
  const { data } = useGetCoins();

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey="id"
      pagination={true}
      size="middle"
      scroll={{ y: 400 }}
      pagination={false}
      rowHoverable
      onChange={(_, __, sorter) => {
        setSortField(sorter.field ?? null);
        setSortOrder(sorter.order ?? null);
      }}
    />
  );
}
