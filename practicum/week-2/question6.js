/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function (input) {
  if (input.length === 0) {
    return 0;
  }
  input.sort((a, b) => a - b);
  let middle = Math.floor(input.length / 2);
  if (input.length % 2) {
    return input[middle];
  }
  return (input[middle - 1] + input[middle]) / 2;
};

let test1 = median([1, 2, 3, 4, 6, 6, 7, 8]);
console.log(test1);
