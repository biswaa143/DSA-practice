const findTwoSum = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return 0;
};
const arr = [2, 7, 11, 15];
target = 22;
const res = findTwoSum(arr, target);
console.log(res);
