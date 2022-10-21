export const formatMoney = (value, currency = "USD", locale = "en-US") => {
  value = Number(value);
  const formatter = new Intl.NumberFormat(locale, { style: "currency", currency });
  return formatter.format(value);
};
