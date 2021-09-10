/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function (input, shuffleIndices) {
  let output = {};
  for (var i = 0; i < shuffleIndices.length; i++) {
    output[shuffleIndices[i]] = input[i];
  }
  var retval = "";
  for (var j = 0; j < input.length; j++) {
    retval += output[j];
  }

  return retval;
};

let test9 = suffleString("singgreet", [8, 5, 6, 0, 7, 1, 2, 3, 4]);
console.log(test9);
