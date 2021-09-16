/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function (n) {
  let arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = [];
    for (var j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }
  return arr;
};

console.log(PascalTriangle(4));
