const sumOddSubarr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - i;
    const totalSubarr = left * right;

    const oddSubarr = Math.floor((totalSubarr + 1) / 2);
    sum += oddSubarr * arr[i];
  }
  return sum;
};
const arr = [1, 4, 2, 5, 3];
const res = sumOddSubarr(arr);
console.log(res);
