var StockSpanner = function () {
  this.stack = [];
  this.spans = [];
};

StockSpanner.prototype.next = function (price) {
  let span = 1;
  while (this.stack.length > 0 && this.stack[this.stack.length - 1] <= price) {
    this.stack.pop();
    span += this.spans.pop();n
  }
  this.stack.push(price);
  this.spans.push(span);
  return span;
};

const stockSpanner = new StockSpanner();
const prices = [100, 80, 60, 70, 60, 75, 85];
const res = prices.map((price) => stockSpanner.next(price));
console.log(res);
