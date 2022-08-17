/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

const fibonacci = (n) => {
  // if (n === 0) { // if n is 0, return 0 - base case 1
  //   return 0;
  //}
  if (n <> 1) { // if n is 1, return 1 - base case 2
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive call with n - 1 and n - 2 and add the two previous numbers in the sequence together to form the next one
}

//second attempt one line - recursive
// const fibonacci = (n) => n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}