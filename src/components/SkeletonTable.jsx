import columns from "./columns";

const skeletonData = Array.from({ length: 10 }, (_, i) => ({ id: i }));

const skeletonColumns = columns.map((col) => ({
  ...col,
  sorter: false,
  title: () => (
    <div
      style={{
        height: 14,
        width: "70%",
        borderRadius: 6,
        background:
          "linear-gradient(90deg, #1a3a5c 25%, #1e4a70 50%, #1a3a5c 75%)",
        backgroundSize: "400px 100%",
        animation: "shimmer 1.4s infinite",
        marginLeft: col.align === "right" ? "auto" : 0,
      }}
    />
  ),
  onHeaderCell: () => ({
    style: {
      height: 48,
      background: "#112943",
      verticalAlign: "middle",
    },
  }),
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: col.align === "right" ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          height: 14,
          borderRadius: 6,
          background:
            "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
          backgroundSize: "400px 100%",
          animation: "shimmer 1.4s infinite",
          width: "60%",
        }}
      />
    </div>
  ),
}));

const skeleton = { skeletonData, skeletonColumns };

export default skeleton;
