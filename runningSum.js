const runningSum = (nums) => {
  let res = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res.push(sum);
  }
  return res;
};
const nums = [1, 2, 3, 4, 5];
const ans = runningSum(nums);
console.log(ans);
