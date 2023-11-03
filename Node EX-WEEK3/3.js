function rolls(arr){
    // Exceptions
    if (arr.length < 3){
        throw new Error("the array must have more than 3 numbers!")
    } else {
        arr.forEach(val => {
            if (val <= 0 || val > 6){
                throw new Error("number must be from 1 to 6!")
            }
        })
    }
    // ---------------------------------
    let sum = 0;
    arr.forEach((val, index) => {
        switch (val){
            case 1:
                if (index !== arr.length - 1){
                    sum += (val - arr[index + 1]);
                    break;
                } else {
                    sum += val;
                    break;
                }
            case 6:
                if (index !== arr.length - 1){
                    sum += ((val + (arr[index + 1] * 2)) - arr[index + 1]);
                    break;
                } else {
                    sum += val;
                    break;
                }
            default:
                sum += val;
                break;
        }
    })
    return sum;
}

console.log(rolls([1, 2, 3]));
console.log(rolls([2, 6, 2, 5]));
console.log(rolls([6, 1, 1]));
console.log(rolls([1, 6, 2, 3, 4, 5, 1, 6]));