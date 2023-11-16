function findDuplicate(arr){
    const result = {};
    for (const element of arr){
        (result.hasOwnProperty(element)) ? result[element]++ : result[element] = 1;
    }
    return result;
}

const myArr = [1, 1, 2, 3, 4, 5, 5, 9];
console.log(findDuplicate(myArr));

module.exports = {
    findDuplicate,
}