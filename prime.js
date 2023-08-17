const findPrimes = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const countPrimes = (num) => {
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (findPrimes(i)) {
      count++;
    }
  }
  return count;
};

const num = 100;
const res = countPrimes(num);
console.log(res);
