const findDuplicate = (arr) => {
    arr.sort((a,b) => a-b)
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            return true;
        }
    }
    return false;
}
const arr = [1,5,3,8,3,1,7,4,9,2,8];
const res = findDuplicate(arr);
console.log(res);