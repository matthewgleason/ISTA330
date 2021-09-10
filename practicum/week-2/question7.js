/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function (input) {
  input.sort();
  let sum = 0;
  for (var i = 0; i < input.length; i += 2) {
    sum += input[i];
  }
  return sum;
};

let test7 = maxSumOfMins([1, 3, 4, 2, 6, 8, 5, 7]);
console.log(test7);
