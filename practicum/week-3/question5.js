/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function (input) {
  let temp = input.slice(0);
  let aTemp = input.slice(0);
  let dTemp = input.slice(0);

  let ascending = aTemp.sort((n, m) => n - m);
  let descending = dTemp.sort((n, m) => m - n);

  return (
    temp.every((val, index) => val === ascending[index]) ||
    temp.every((val, index) => val === descending[index])
  );
};

console.log(isMonotonic([12, 6, 2, 2, 2, 1]));
