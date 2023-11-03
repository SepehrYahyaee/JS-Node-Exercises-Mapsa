let sum1 = sum2 = 0;

for(let i = 1; i < 1000 ; i++){
    if(i % 3 === 0){
        // console.log(i);
        sum1 += i;
    }
}
for(let j = 1; j < 1000 ; j++){
    if(j % 5 === 0){
        // console.log(j);
        sum2 += j;
    }
}
console.log(sum1 + sum2); // 266333 is the answer of this code!

// Question: Why can't we declare sum1 and sum2 in the "for loop" body itself? I tried it and the result is ReferenceError.