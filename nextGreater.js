const nectGreaterElement = (nums1, nums2) => {
  let nextGreater = new Map();
  let stack = [];

  for (let num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      nextGreater.set(stack.pop(), num);
    }
    stack.push(num);
  }

  let ans = new Array(nums1.length);
  for (let i = 0; i < nums1.length; i++) {
    ans[i] = nextGreater.get(nums1[i]) || -1;
  }

  return ans;
};
const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
const res = nectGreaterElement(nums1, nums2);
console.log(res);
