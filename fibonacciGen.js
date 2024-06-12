const fibonacci = require("./fibFunc.js");
/**
 * @start_index - starting number of range
 * @end_index - ending number in the range
 * @fibonacci - function that takes n arguement to perform fibonacci sequence
 *  @fibonacciGenerator - functon that take 2 argument to iterate between
 */

const fibonacciGenerator = (start_index = 0, end_index = Infinity) => {
  let currentIndex = start_index;
  return {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          if (currentIndex <= end_index) {
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

const start = 4; // start_index
const end = 6;  // end_index
const fibSequence = fibonacciGenerator(start, end);

for (const number of fibSequence) {
  console.log(number);
}
