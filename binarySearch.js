const binarysearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
const arr = [-1, 0, 3, 5, 9, 12];
const target = 9;
const res = binarysearch(arr, target);
console.log(res);
