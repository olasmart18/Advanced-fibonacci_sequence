function fibonacci(num) {
    const cache = {}; // to store preceding data
    if (num in cache) {
        return cache[num];
    } else if (num <= 1) {
        return num;
    } else {
        const fibNumber = fibonacci(num - 1) + fibonacci(num - 2);
        cache[num] = fibNumber;
        return fibNumber;
    }
}
console.log(fibonacci(4));
module.exports = fibonacci;