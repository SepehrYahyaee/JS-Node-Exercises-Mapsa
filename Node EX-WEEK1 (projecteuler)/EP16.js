let i, s;
let sum = 0;
let index;

s = BigInt(2 ** 1000) + "";

for (i = 0 ; i < s.length ; i++){
    // console.log(s[i]);
    index = s[i] * 1;
    sum += index;
}
console.log(sum); // 1366 is the answer.