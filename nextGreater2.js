const nextGreater = (nums) => {
  let stack = [];
  let ans = new Array(nums.length).fill(-1);

  for (let i = 0; i < 2 * nums.length; i++) {
    const num = nums[i % nums.length];
    while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
      ans[stack.pop()] = num;
    }
    if (i < nums.length) {
      stack.push(i);
    }
  }
  return ans;
};
const nums = [1, 2, 3, 4, 3];
const res = nextGreater(nums);
console.log(res);
