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

// Solution 2
function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}

// Solution 3
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}