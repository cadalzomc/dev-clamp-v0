export const RandomCode = (digit: number) => {
  if (digit < 3 || digit > 8) {
    return "";
  }
  const max = Math.pow(10, digit);
  return Math.floor(Math.random() * max)
    .toString()
    .padStart(digit, "0");
};
