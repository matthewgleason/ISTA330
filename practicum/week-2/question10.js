/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function (n) {
  let val = n.toString();
  let arr = val.split("");
  arr.sort((a, b) => a - b);
  return parseInt(arr[arr.length - 1]) - parseInt(arr[0]);
};

let test10 = maxMinusMin(472);
console.log(test10);
