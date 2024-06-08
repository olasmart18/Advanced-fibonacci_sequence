
// function to calculate fbonacci
const fibonacci = function (num) {
  try {
    const cache ={}; // store previous fibonacci request number
   
    if (num in cache) {
      console.log("fetched from cached data");
      return cache[num];
    } else if (num <= 1) {
      return num;
    }
     const fibNumbs = fibonacci(num - 1) + fibonacci(num - 2);
     cache[num] = fibNumbs; // cache value
    return fibNumbs;
  } catch (error) {
    console.log(error);
  }
};
module.exports = fibonacci;