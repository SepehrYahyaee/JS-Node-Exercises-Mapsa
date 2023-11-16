function nextFibonacciNumber(num){
    let [a, b] = [1, 1];
    while (b < num){
        [a, b] = [b, b + a];
    }
    return b;
}

console.log(nextFibonacciNumber(20));
console.log(nextFibonacciNumber(120));

module.exports = {
    nextFibonacciNumber,
}