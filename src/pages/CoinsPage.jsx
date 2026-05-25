import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Table, Spin } from "antd";

import { useGetCoins } from "@features/coins/hooks";
import { SkeletonTable } from "@components";
import columns from "../components/columns";

const PER_PAGE = 50;

export default function CoinsPage() {
  const [, setSortField] = useState(null);
  const [, setSortOrder] = useState(null);
  const { skeletonColumns, skeletonData } = SkeletonTable;

  const { data, isLoading, isFetching } = useGetCoins({
    page: 1,
    perPage: PER_PAGE,
  });

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
