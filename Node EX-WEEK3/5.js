function funnyNumbers(n, p){
    if (p < 1) throw new Error("power must be above 1 or 1 itself!")
    let num = n + "";
    let result = 0;
    for (let i = 0 ; i < num.length ; i++, p++){
        result += Number(num[i]) ** p
    }
    if (result % n === 0){
        return (result / n);
    } else {
        return 0;
    }
}

console.log(funnyNumbers(46288, 3));
console.log(funnyNumbers(89, 1));
console.log(funnyNumbers(92, 1));
console.log(funnyNumbers(695, 2));