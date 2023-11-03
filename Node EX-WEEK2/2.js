function contiguousOnes(arr){
    let newArr = [];
    let counter = 0;
    arr.map((val) => {
        if (val === 1){
            newArr.push(val);
        } else if (val !== 1){
            newArr.push("-");
        }
    })
    newArr = newArr.join("");
    newArr = newArr.split("-");
    for (let element of newArr){
        if (element.length > 1){
            counter += 1;
        }
    }
    return counter;
}

let arr1 = [1, 0, 0, 1, 1, 0, 1, 1, 1];
let arr2 = [1, 0, 1, 0, 1, 0, 1, 0];
let arr3 = [1, 1, 1, 1, 0, 0, 0, 0];
let arr4 = [1, 1, 2, 4, 7, 1, 0, 0, 4, 7, 1, 4, 6, 1, 1, 1, 1, 3, 2, 1, 1, 3, 2, 1, 5, 9];

console.log(contiguousOnes(arr1));
console.log(contiguousOnes(arr2));
console.log(contiguousOnes(arr3));
console.log(contiguousOnes(arr4));