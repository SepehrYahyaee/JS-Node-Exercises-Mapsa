let i, j, flag;
const num = 600_851_475_143;

// Generating Prime Numbers.
for (i = 2 ; i < num ; i++){
    flag = true;
    for (j = 2 ; j < i ; j++){
        if (i % j === 0){
            flag = false;
            break;
        }
    }
    if (flag){
        if (num % i === 0) {
        console.log(i);  // 6857 is the answer!
        }
    } 
}