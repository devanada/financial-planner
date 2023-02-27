const formatter = (value: number) => {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });
  return currency.format(value);
};

export default formatter;
