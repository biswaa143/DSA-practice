const trappingRainWater = (height) => {
  let left = 0,
    right = height.length - 1,
    leftMax = 0,
    rightMax = 0,
    trappingWater = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        trappingWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        trappingWater += rightMax - height[right];
      }
      right--;
    }
  }
  return trappingWater;
};
const height = [4,2,0,3,2,5];
const res = trappingRainWater(height);
console.log(res);
