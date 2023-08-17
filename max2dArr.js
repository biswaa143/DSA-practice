accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
const maxArr = (accounts) => {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let currmax = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      currmax += accounts[i][j];
    }
    max = Math.max(max, currmax);
  }
  return max;
};
const res = maxArr(accounts);
console.log(res);
