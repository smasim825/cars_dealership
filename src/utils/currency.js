export const CURRENCIES = [
  { code: 'JPY', symbol: '¥', rate: 155.0, label: 'JPY (¥)' },
  { code: 'USD', symbol: '$', rate: 1.0, label: 'USD ($)' },
];

export function formatPrice(numericPrice, currencyCode = 'JPY') {
  if (!numericPrice) return '¥0';
  const curr = CURRENCIES.find(c => c.code === currencyCode) || CURRENCIES[0];
  const converted = Math.round(numericPrice * curr.rate);
  return `${curr.symbol}${converted.toLocaleString('en-US')}`;
}
