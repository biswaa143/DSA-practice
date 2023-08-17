const selectionsortDescending = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let max = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[max]) {
        max = j;
      }
    }
    // let temp = arr[i];
    // arr[i] = arr[max];
    // arr[max] = temp;
    [arr[i], arr[max]] = [arr[max], arr[i]];
  }
  return arr;
};
const arr = [4, 3, 2, 5, 1];
const res = selectionsortDescending(arr);
console.log(res);
