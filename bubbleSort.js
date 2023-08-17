const bubbleSortDescending = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const arr = [2, 5, 7, 7, 9, 2, 6, 3, 4];
const res = bubbleSortDescending(arr);
console.log(res);




//For removre duplicate
const bubbleSortDescendingWithDuplicates = (arr) => {
  // Remove duplicates
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  // Bubble sort in descending order
  for (let i = 0; i < uniqueArr.length - 1; i++) {
    for (let j = i + 1; j < uniqueArr.length; j++) {
      if (uniqueArr[i] < uniqueArr[j]) {
        let temp = uniqueArr[i];
        uniqueArr[i] = uniqueArr[j];
        uniqueArr[j] = temp;
      }
    }
  }

  return uniqueArr;
};

const inputArray = [2, 5, 7, 7, 9, 2, 6, 3, 4];
const sortedArray = bubbleSortDescendingWithDuplicates(inputArray);

console.log(sortedArray); // Output the sorted and duplicate-free array
