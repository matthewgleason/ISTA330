/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function (input) {
  let floor = Math.floor(input.length / 2);
  let dict = {};
  for (var i = 0; i < input.length; i++) {
    dict[input[i]] = (dict[input[i]] || 0) + 1;

    if (dict[input[i]] === floor) {
      return input[i];
    }
  }
  return -1;
};
console.log(m_element([1, 3, 2, 7]));
