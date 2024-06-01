
const nodeCache = require("node-cache");
const cache = new nodeCache();

// function to calculate fbonacci
const fibonacci = function (num) {
  try {
    // generate a key to store cache
    const cacheKey = `fibonacci-${num}`;

    // cache exist fibonacci request here
    const cacheFib = cache.get(cacheKey);
    console.log(cacheFib);

    if (cacheFib) {
      console.log("fetched from cached data");
      return cacheFib;
    }
    let fibNumbs = [0, 1];
    for (let i = 2; i < num; i++) {
      fibNumbs[i] = fibNumbs[i - 1] + fibNumbs[i - 2];
    }
    // cache value
    const cacheValue = fibNumbs[num - 1];

    // save the recent fibonacci to cache.
    cache.set(cacheKey, cacheValue);

    console.log("newly genrated fibonacci", cacheValue);
    return fibNumbs[num - 1];
  } catch (error) {
    console.log(error);
  }
};
console.log(fibonacci(6));
