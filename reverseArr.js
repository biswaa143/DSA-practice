const findreverseArr = (arr) => {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr += arr[i];
  }
  return reversedArr;
};

const arr = [1,2,3,4,5];
const res = findreverseArr(arr);
console.log(res);
