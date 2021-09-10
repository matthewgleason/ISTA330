/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function (input) {
  let output = [];
  for (var i = 0; i < input.length; i++) {
    var num = 0;
    for (var j = 0; j < input.length; j++) {
      if (input[j] % 2 == 0 && input[j] > input[i]) {
        num++;
      }
    }
    output.push(num);
  }

  return output;
};

let test8 = biggerAndEven([1, 3, 4, 2, 6, 8, 5, 7]);
console.log(test8);
