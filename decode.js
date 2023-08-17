const decodestring = (s) => {
  let stack = [];
  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
    } else {
      let curr = stack.pop();
      let str = "";

      while (curr !== "[") {
        str = curr + str;
        curr = stack.pop();
      }
      let num = "";
      curr = stack.pop();
      while (!isNaN(curr)) {
        num = curr + num;
        curr = stack.pop();
      }
      stack.push(curr);
      stack.push(str.repeat(Number(num)));
    }
  }
  return stack.join("");
};
const s = "3[a]2[bc]";
const res = decodestring(s);
console.log(res);
