/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function (input) {
  let retval = [];
  let min = null;
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      if (i !== j) {
        let val = Math.abs(input[i] - input[j]);
        if (val != 0) {
          console.log(val, min);
          if (min > val || min === null) {
            retval = [];
            retval.push([input[i], input[j]].sort((n, m) => n - m));
            min = val;
          } else if (min === val) {
            retval.push([input[i], input[j]].sort((n, m) => n - m));
          }
        }
      }
    }
  }
  return retval.slice(0, Math.floor(retval.length / 2)).sort();
};

console.log(minPairs([17, -5, -1, 24, 29, 54, 1, 27, 19]));
