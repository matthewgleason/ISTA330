/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function (input) {
  let subarray = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      subarray.push(input.slice(i, j).reduce((n, m) => n + m));
    }
  }
  if (Math.max(...subarray) < input.sort((n, m) => n - m)[input.length - 1]) {
    return input.sort((n, m) => n - m)[input.length - 1];
  }
  return Math.max(...subarray);
};
