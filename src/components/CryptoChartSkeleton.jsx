import { Card, Skeleton } from "antd";

export default function CryptoChartSkeleton() {
  return (
    <Card
      title={<Skeleton.Input active style={{ width: 160 }} />}
      extra={<Skeleton.Button active />}
    >
      {/* chart area */}
      <div style={{ height: 320, position: "relative" }}>
        {/* Y axis skeleton */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 100,
            width: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton.Input key={i} active size="small" style={{ width: 30 }} />
          ))}
        </div>

        {/* X axis skeleton */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 40,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton.Input key={i} active size="small" style={{ width: 40 }} />
          ))}
        </div>

        {/* GRID + LINE */}
        <div
          style={{
            position: "absolute",
            left: 300,
            right: 0,
            top: 0,
            bottom: 30,
            padding: 10,
          }}
        >
          {/* grid lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateRows: "repeat(5, 1fr)",
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid #f0f0f0",
                }}
              />
            ))}
          </div>

          {/*  chart line */}
          <svg width="100%" height="100%">
            <path
              d="M0,120 C80,40 160,200 240,100 C320,0 400,180 480,80"
              fill="none"
              stroke="#d9d9d9"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
}
