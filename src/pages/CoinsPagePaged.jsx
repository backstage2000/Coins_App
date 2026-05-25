import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Table, Spin } from "antd";

import columns from "../components/columns";
import { useGetCoins } from "../features/coins/hooks/useGetCoins";
import skeleton from "../components/SkeletonTable";

const PER_PAGE = Number(import.meta.env.VITE_PAGE_SIZE) || 50;

export default function CoinsPagePaged() {
  const [, setSortField] = useState(null);
  const [, setSortOrder] = useState(null);
  const [page, setPage] = useState(1);
  const { skeletonColumns, skeletonData } = skeleton;

  const { data, isLoading, isFetching, isRefetching } = useGetCoins({
    page,
    perPage: PER_PAGE,
  });

  return (
    <Table
      dataSource={isLoading ? skeletonData : data}
      columns={isLoading ? skeletonColumns : columns}
      rowKey="id"
      size="middle"
      scroll={{ y: 400 }}
      pagination={{
        current: page,
        pageSize: 20,
        onChange: (page) => setPage(page),
      }}
      loading={!isRefetching && isLoading && isFetching}
      rowHoverable={!isLoading}
      onChange={(_, __, sorter) => {
        setSortField(sorter.field ?? null);
        setSortOrder(sorter.order ?? null);
      }}
    />
  );
}
