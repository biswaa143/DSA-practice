const largestRectangle = (heights) => {
  let stack = [];
  let n = heights.length;
  let leftSmall = new Array(n);
  let rightSmall = new Array(n);

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      leftSmall[i] = 0;
    } else {
      leftSmall[i] = stack[stack.length - 1] + 1;
    }
    stack.push(i);
  }

  stack = []; // Reset the stack

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      rightSmall[i] = n - 1;
    } else {
      rightSmall[i] = stack[stack.length - 1] - 1;
    }
    stack.push(i);
  }

  let maxA = 0;
  for (let i = 0; i < n; i++) {
    maxA = Math.max(maxA, heights[i] * (rightSmall[i] - leftSmall[i] + 1));
  }
  return maxA;
};

const heights = [2, 1, 5, 6, 2, 3];
const res = largestRectangle(heights);
console.log(res);
