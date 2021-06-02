"use strict";

// Solution 1
function persistence(num) {
  let count = 0;
  
  const findProduct = (num) => {
    if ([...num.toString()].length <= 1) {
      return count;
    } else {
      count++;
      let newNum = [...num.toString()].reduce((a, b) => a * b, 1);
      return findProduct(newNum);
    }
  };
  
  return findProduct(num);
}