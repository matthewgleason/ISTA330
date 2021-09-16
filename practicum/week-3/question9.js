/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function (n) {
  if (n < 10) return 9;
  let val = 10;
  let retval = [[1], [2], [3], [4], [5], [6], [7], [8], [9]];
  let i = 0;
  while (val <= n) {
    if (i >= retval.length) i = 0;
    retval[i].push(val);
    i++;
    val++;
  }
  let outcome = retval.filter((n) => n.length === retval[0].length);
  return outcome.length;
};

console.log(largestGroupsCount(12));
