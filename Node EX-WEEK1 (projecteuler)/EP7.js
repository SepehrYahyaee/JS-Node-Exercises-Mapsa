let i, j, flag;
let counter = 0

// Prime Number Generator Again!
for (i = 2 ; i < Number.MAX_SAFE_INTEGER ; i++){
    flag = true;
    for (j = 2 ; j < i ; j++){
        if (i % j === 0){
            flag = false;
            break;
        }
    }
    if (flag){
        // console.log(i);
        counter += 1;
        if (counter === 10001){
            console.log(i); // 104743 is the answer to this question.
        }
    }
}