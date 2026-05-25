export function mapChartData(data, days) {
  if (!data) return [];

  if (days === "1d") {
    return mapIntradayData(data);
  }

  return mapDailyData(data);
}

function mapIntradayData(data) {
  return data.prices.map((item, index) => {
    const [timestamp, price] = item;

    return {
      time: formatHour(timestamp),

      price,

      marketCap: data.market_caps[index][1],

      volume: data.total_volumes[index][1],
    };
  });
}

function mapDailyData(data) {
  const uniqueDays = new Map();

  data.prices.forEach((item, index) => {
    const [timestamp, price] = item;

    const day = formatDay(timestamp);

    if (!uniqueDays.has(day)) {
      uniqueDays.set(day, {
        time: day,

        price,

        marketCap: data.market_caps[index][1],

        volume: data.total_volumes[index][1],
      });
    }
  });

  return Array.from(uniqueDays.values());
}

function formatHour(timestamp) {
  return new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDay(timestamp) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
