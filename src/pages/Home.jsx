import { motion } from "motion/react";

const chartData = [40, 55, 45, 70, 65, 90, 80, 110, 95, 130];

export default function BitcoinChart() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "rgb(255, 255, 255)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        fontFamily: "sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          width: "100%",
          maxWidth: 900,
          background: "#112943",
          borderRadius: 32,
          padding: 32,
          boxShadow: "0 0 40px rgba(22,119,255,0.15)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div>
            <p
              style={{
                color: "#94a3b8",
                marginBottom: 10,
                fontSize: 14,
              }}
            >
              Bitcoin / USD
            </p>

            <h1
              style={{
                color: "white",
                fontSize: 42,
                fontWeight: 800,
              }}
            >
              $108,420
            </h1>
          </div>

          <div
            style={{
              background: "#e6f4ff",
              color: "#1677ff",
              padding: "12px 18px",
              borderRadius: 16,
              fontWeight: 700,
            }}
          >
            +4.25%
          </div>
        </div>

        <div
          style={{
            height: 350,
            display: "flex",
            alignItems: "flex-end",
            gap: 14,
          }}
        >
          {chartData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: item * 2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.05,
              }}
              style={{
                flex: 1,
                borderRadius: "18px 18px 0 0",
                background: "linear-gradient(to top, #1677ff, #7dd3fc)",
                boxShadow: "0 0 20px rgba(22,119,255,0.3)",
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
            color: "#94a3b8",
            fontSize: 14,
          }}
        >
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </motion.div>
    </div>
  );
}
