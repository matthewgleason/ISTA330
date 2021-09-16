/*
Given two integer arrays input1 and input2, 
and the integer d, return the d-count 
between the two arrays.

The d-count is defined as 
the number of elements input1[i] such that 
there is not any element input2[j] 
where |input1[i]-input2[j]| <= d.

Example:
input: input1 = [2,1,26,3], input2 = [-5,-2,10,-3,7], d = 6
output: 1
*/

var d_count = function (input1, input2, d) {
  let count = 0;
  for (var i = 0; i < input1.length; i++) {
    const outcome = input2.filter((n) => Math.abs(input1[i] - n) <= d);
    if (outcome.length === 0) count++;
  }
  return count;
};
