function price(value) {
  if (value >= 1000)
    return "$" + value.toLocaleString("en-US", { maximumFractionDigits: 0 });
  if (value >= 1)
    return (
      "$" +
      value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  return (
    "$" +
    value.toLocaleString("en-US", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 5,
    })
  );
}

function compact(value) {
  if (value >= 1e12) return "$" + (value / 1e12).toFixed(2) + "T";
  if (value >= 1e9) return "$" + (value / 1e9).toFixed(2) + "B";
  if (value >= 1e6) return "$" + (value / 1e6).toFixed(2) + "M";
  return "$" + value.toLocaleString("en-US");
}

const format = { price, compact };

export default format;
