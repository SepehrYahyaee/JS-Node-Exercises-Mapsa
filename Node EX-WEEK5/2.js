const arr1 = [1, [2, 3]];
const arr2 = [1, [2, 3]];
const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
const mix = [1, 2, [3], {a: 2, b: 3}];

function recursiveFlat(arr){
    let result = [];
    for (let i = 0 ; i < arr.length ; i++){
        if (Array.isArray(arr[i])){
            result.push(recursiveFlat(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result.flat();
}

function deepEqual(value1, value2){

    // Array to Array
    if (Array.isArray(value1, value2)){
        if (value1 === value2) return true; // if their reference is the same which is unlikely!
        if (value1.length !== value2.length) return false; // if their length isn't the same so they're not equal!

        flattenedValue1 = recursiveFlat(value1);
        flattenedValue2 = recursiveFlat(value2);

        if (flattenedValue1.length !== flattenedValue2.length) return false; // length check after fully flattening.
        for (let j = 0 ; j < flattenedValue2.length ; j++){
            if (flattenedValue1[j] !== flattenedValue2[j]){
                return false;
            } else {
                continue;
            }
        }
        return true;
    }
}

// console.log([1, [2], [3, 4], {a: 1, b: 2}].toString().split(','));
// console.log(recursionFlat([1, [2], [3, 4], 'a', ['b', 'c'], {a: 1, b: 2}]));

console.log(deepEqual(arr1, arr2));
console.log(arr1 === arr2);