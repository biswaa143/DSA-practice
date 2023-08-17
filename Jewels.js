const jewelsInStone = (jewels, stones) => {
  let jewelCount = 0;
  for (let stone of stones) {
    if (jewels.includes(stone)) {
      jewelCount++;
    }
  }
  return jewelCount;
};

const jewels = "aA",
  stones = "aAAbbbb";
const res = jewelsInStone(jewels, stones);
console.log(res);
