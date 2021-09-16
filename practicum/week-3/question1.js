/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function (input) {
  let greatest = Math.max(...input);
  let retval = input.filter((n) => n !== greatest && n * 2 > greatest);

  return retval.length === 0;
};

console.log(largestNumberIsAtLeastTwice([3, 2, 21, 50]));
console.log(largestNumberIsAtLeastTwice([3, 1, 2, 5]));
console.log(largestNumberIsAtLeastTwice([3, 1, 2, 6]));
