const fibonacci = require("./fib.js");
/**
 * @start_index - starting number of range
 * @end_index - ending number in the range
 * @fibonacci - function that takes n arguement to perform fibonacci sequence
 *  @fibonacciGenerator_v2 - functon that take 2 argument to iterate between
 */

const fibonacciGenerator_v2 = (start_index = 0, end_index = Infinity) => {
  let currentIndex = start_index;
  return {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          if (currentIndex <= end) {
            const value = fibonacci(currentIndex);
            currentIndex++;
            return { value, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
};

const start = 4;
const end = 6; // Define your desired range
const fibSequence = fibonacciGenerator_v2(start, end);

for (const number of fibSequence) {
  console.log(number);
}
// console.log(fibonacciGenerator_v2(4, 8));
module.exports = fibonacciGenerator_v2;
