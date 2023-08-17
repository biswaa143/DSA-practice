const onlineStockSpan = (prices) => {
  let stack = [];
  let spans = [];

  for (let i = 0; i < prices.length; i++) {
    let span = 1;
    if (stack.length > 0 && prices[stack.length - 1] <= prices[i]) {
      span += spans[stack.pop()];
    }
    spans[i] = span;
    stack.push(i);
  }
  return spans;
};
const prices = [100, 80, 60, 70, 60, 75, 85];
const res = onlineStockSpan(prices);
console.log(res);
