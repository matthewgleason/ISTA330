/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function (input) {
  let output = [];
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[i] < input[j]) {
        output.push([i, j]);
      }
    }
  }

  return output.length;
};

let question3test = numberOfOrderedPairs([4, 2, 6, 9]);
console.log(question3test);
console.log(numberOfOrderedPairs([1, 2, 3, 4]));
