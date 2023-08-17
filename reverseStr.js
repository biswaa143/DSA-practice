const findreverseStr = (str) => {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  };
  
  const str = 'xyz';
  const res = findreverseStr(str);
  console.log(res);
  