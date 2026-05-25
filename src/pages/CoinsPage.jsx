import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Table, Spin } from "antd";

import columns from "../components/columns";
import { useGetCoins } from "../features/coins/hooks/useGetCoins";
import skeleton from "../components/SkeletonTable";

const PER_PAGE = Number(import.meta.env.VITE_PAGE_SIZE) || 50;

export default function CoinsPage() {
  const [, setSortField] = useState(null);
  const [, setSortOrder] = useState(null);
  const { skeletonColumns, skeletonData } = skeleton;

  const { data, isLoading, isFetching } = useGetCoins(1, PER_PAGE);

  return (
    <Table
      dataSource={isLoading ? skeletonData : data}
      columns={isLoading ? skeletonColumns : columns}
      rowKey="id"
      size="middle"
      scroll={{ y: 400 }}
      pagination={false}
      rowHoverable={!isLoading}
      loading={isFetching}
      onChange={(_, __, sorter) => {
        setSortField(sorter.field ?? null);
        setSortOrder(sorter.order ?? null);
      }}
    />
  );
}
