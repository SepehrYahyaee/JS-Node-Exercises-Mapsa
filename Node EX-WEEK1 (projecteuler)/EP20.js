let i, j;
let factorial= 1;
let s = "";
let sum = 0;

for (i = 100 ; i > 1 ; i--){
    factorial *= i * (i - 1);
    i -= 1;
}
console.log(BigInt(factorial));

s = BigInt(factorial) + "";
console.log(s);

for (j = 0 ; j < s.length ; j++){
    sum = sum + (s[j] * 1)
}

console.log(sum); // 738 is the sum according to this code.