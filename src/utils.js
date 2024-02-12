const calculateOrderPrice = ({ bun, salad, cheese, cutlet }) => {
  return bun * 5 + salad * 5 + cheese * 1 + cutlet * 2;
};

const calculateTotalPrice = (orders) => {
  return orders.reduce((prev, curr) => prev + curr.price, 0);
};

export { calculateOrderPrice, calculateTotalPrice };
