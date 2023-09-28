export const getPlanValue = (value: number, isYearly: boolean) => {
  const percentageOff = 0.1667;
  if (!isYearly) return value;
  const totalPrice = value * 12;
  const discountedPrice = totalPrice - Math.floor(totalPrice * percentageOff);
  console.log(discountedPrice);
  return Math.ceil(discountedPrice);
};
