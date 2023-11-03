// Prime Generator
let i, j, flag;

for (i = 2 ; i < 2000 ; i++){
    flag = true;
    for (j = 2 ; j < i; j++){
        if (i % j === 0){
            flag = false;
            break;
        }
    }
    if (flag){
        console.log(i);
    }
}

// نمیدانم