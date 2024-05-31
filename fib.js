// function to calculate fbonacci
const fibonacci = function (num) {
    let fibNumbs = [0, 1];

    for (let i =2; i < num; i++) {
        fibNumbs[i] = fibNumbs[i - 1] + fibNumbs[i - 2];
    }
    return fibNumbs;
}
console.log( fibonacci(2));
console.log( fibonacci(3));
console.log( fibonacci(4));
console.log( fibonacci(5));
