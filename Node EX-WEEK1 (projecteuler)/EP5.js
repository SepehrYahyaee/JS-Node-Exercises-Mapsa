let i, j, flag;

for (i = 21 ; i < Number.MAX_SAFE_INTEGER ; i++){
    flag = true;
    for (j = 2 ; j < 21 ; j++){
        if (i % j !== 0){
            flag = false;
            break;
        }
    }
    if (flag){
        console.log(i); // 232792560 is the answer of this code!
        break;
    }
}