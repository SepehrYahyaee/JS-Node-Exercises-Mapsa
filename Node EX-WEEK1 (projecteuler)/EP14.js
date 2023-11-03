let i, num, init;
let max = 0;
let ans1, ans2;

for (num = 10 ; num < 1000000 ; ){
    init = num;
    // console.log(num);
    for (i = 1 ; i < Number.MAX_SAFE_INTEGER ; i++){
        if (num % 2 === 0){
            num /= 2;
            // console.log(num);
            if (num === 1){
                break;
            }   
        }
        else {
            num = num * 3 + 1;
            // console.log(num);
            if (num === 1){
                break;
            }
        }
    }
    // console.log(`${init} -> ${i+1}`);
    if (max < i + 1){
        max = i + 1;
        // console.log(`Maximum Collatz Sequence till now Belongs to: ${init} -> ${i+1}`);
        ans1 = init;
        ans2 = i + 1;
    }
    num = init + 1;
    // console.log(max);
    continue;
}
console.log(`The Answer is the Number ${ans1} which has the longest (${ans2}) sequences below 1 million.`) // number 837799 -> 525 sequences.