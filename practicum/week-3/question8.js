/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function (input) {
  let dict = {};
  for (var i = 0; i < input.length; i++) {
    dict[input[i]] = (dict[input[i]] || 0) + 1;
  }
  let max = 0;
  for (key in dict) {
    if (key == dict[key]) {
      if (key > max) {
        max = key;
      }
    }
  }
  if (max > 0) return parseInt(max);

  return -1;
};

console.log(d_integer([3, 5, 3, 3, 5, 1]));
