let i, j;
let sum = 0;

// Again Prime Generator !!!!!!!!!!!!!
for (i = 2 ; i < 2000000 ; i++){
    flag = true;
    for (j = 2 ; j < i ; j++){
        if (i % j === 0){
            flag = false;
        }
    }
    if (flag){
        // console.log(i);
        sum += i;
    }
}
console.log(sum); // به دلیل محاسبات سنگین به جواب نمیرسم ولی خب کد درسته