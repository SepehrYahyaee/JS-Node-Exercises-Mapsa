let i, j, Tnum;
let sum = 0;
let counter = 0;

// Generating Triangular Numbers:
for (i = 1 ; i < Number.MAX_SAFE_INTEGER ; i++){
    sum += i;
    Tnum = sum;
    for (j = 1 ; j <= Tnum ; j++){
        if (Tnum % j === 0){
            counter += 1;
        }
    }
    if (counter > 500){
        console.log(Tnum);
        break;
    }
    counter = 0;
}
// Code works fine, but the calculations is too big so I don't have the answer. (try counter > 5 for smaller results.)