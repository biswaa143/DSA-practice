const validStackSequence = (pushed, popped) => {
  let stack = [];
  let poppedIndex = 0;
  for (let num of pushed) {
    stack.push(num);
    while (
      stack.length > 0 &&
      stack[stack.length - 1] === popped[poppedIndex]
    ) {
      stack.pop();
      poppedIndex++;
    }
  }
  return stack.length === 0;
};

const pushed = [1, 2, 3, 4, 5],
  popped = [4, 5, 3, 2, 1];
const res = validStackSequence(pushed, popped);
console.log(res);
