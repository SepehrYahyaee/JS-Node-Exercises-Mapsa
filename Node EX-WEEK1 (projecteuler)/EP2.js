let i, j;
let sum = 0;

for(i = 1, j = 2; i < 4000000 ; i += j, j += i){
    // console.log(i);
    // console.log(j);
    if (i % 2 === 0){
        sum += i;
    }
    if (j % 2 === 0){
        sum += j;
    }
}

console.log(sum); // 4613732 is the answer of this code!