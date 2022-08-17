/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// const isSorted = (arr) => {
//   if (arr.length === 0) { // base case
//     return true; // if the array is empty, return true
//   }
//   if (arr.length === 1) { // base case
//     return true; // if the array is empty, return true
//   }
//   if (arr[0] > arr[1]) { // if the first element is greater than the second element, return false
//     return false;
//   }
//   return isSorted(arr.slice(1)); // recursive call with the next element in the array removed from the array
// }

//second attempt one-liner - recursive
const isSorted = (arr) => arr.length <= 1 ? true : arr[0] > arr[1] ? false : isSorted(arr.slice(1));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}