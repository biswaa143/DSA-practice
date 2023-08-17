const removeAdjacentDuplicates = (s) => {
  let stack = [];
  for (let char of s) {
    if (stack.length === 0 || char !== stack[stack.length - 1]) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};
const s = "azxxzy";
const res = removeAdjacentDuplicates(s);
console.log(res);
