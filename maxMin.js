const findMaxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return [max, min]
};
let arr = [22, 57, 4, 39, 1, -1, 0, -55, 100];
const res = findMaxMin(arr);
console.log(res);
