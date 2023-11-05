function recursiveFlat(arr){ // flat the shit out of an array.
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

function arrCheck(value1, value2){ // only contain arrays inside arrays.
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

function objCheck(obj1, obj2){
    if (obj1 === obj2) return true; // if their reference is the same which is unlikely!
    if ((Object.keys(obj1)).length !== (Object.keys(obj2)).length) return false; // if the length of their keys is not the same, not equal!
    if (!(arrCheck((Object.keys(obj1)).sort(), (Object.keys(obj2)).sort()))) return false; // if they have different key names.

    for (let i = 0 ; i < ((Object.keys(obj1)).sort()).length ; i++){
        const ref = ((Object.keys(obj1)).sort());
        if (obj1[ref[i]] !== obj2[ref[i]]){
            if (Array.isArray(obj1[ref[i]]) && Array.isArray(obj2[ref[i]])){
                if (!(arrCheck(obj1[ref[i]], obj2[ref[i]]))) return false;
                return true;
            } else {
                return false;
            }
        }
    }
    return true;
}

//////////////////////////////////////////////////////////////////////////
function deepEqual(value1, value2){

    // Array to Array
    if (Array.isArray(value1, value2)){
        if (value1 === value2) return true; // if their reference is the same which is unlikely!
        if (value1.length !== value2.length) return false; // if their length isn't the same so they're not equal!

        flattenedValue1 = recursiveFlat(value1);
        flattenedValue2 = recursiveFlat(value2);
        if (flattenedValue1.length !== flattenedValue2.length) return false; // length check after fully flattening.

        for (let j = 0 ; j < flattenedValue2.length ; j++){
            if (flattenedValue1[j] !== flattenedValue2[j] && typeof flattenedValue1[j] !== 'object' && typeof flattenedValue2[j] !== 'object'){
                return false;
            } else if (flattenedValue1[j] !== flattenedValue2[j] && (typeof flattenedValue1[j] !== 'object' || typeof flattenedValue2[j] !== 'object')){
                return false;
            } else if (flattenedValue1[j] !== flattenedValue2[j] && typeof flattenedValue1[j] === 'object' && typeof flattenedValue2[j] === 'object'){
                if (objCheck(flattenedValue1[j], flattenedValue2[j])) continue;
                return false;
            } else {
                continue;
            }
        }
        return true; 
        // Object to Object
    } else if ( !(Array.isArray(value1, value2)) && typeof value1 === 'object' && typeof value2 === 'object'){
        if (value1 === value2) return true; // if their reference is the same which is unlikely!
        if ((Object.keys(value1)).length !== (Object.keys(value2)).length) return false; // if the length of their keys is not the same, not equal!
        if (!(arrCheck((Object.keys(value1)).sort(), (Object.keys(value2)).sort()))) return false; // if they have different key names.
    
        for (let i = 0 ; i < ((Object.keys(value1)).sort()).length ; i++){
            const ref = ((Object.keys(value1)).sort());
            if (value1[ref[i]] !== value2[ref[i]]){
                if (Array.isArray(value1[ref[i]]) && Array.isArray(value2[ref[i]])){
                    if (typeof value1[ref[i]] === 'object' && typeof value2[ref[i]] === 'object'){
                        return objCheck(value1[ref[i]], value2[ref[i]]);
                    }
                    if (!(arrCheck(value1[ref[i]], value2[ref[i]]))) return false;
                    return true;
                } else {
                    return false;
                }
            }
        }
        return true;
        // other types
    } else if (typeof value1 === 'number' && typeof value2 === 'number'){
        if (value === value2) return true;
        return false;
    } else if (typeof value1 === 'number' && Array.isArray(value2)) return false;
    else if (Array.isArray(value1) && typeof value2 === 'number') return false;
    else if (typeof value1 === 'boolean' && typeof value2 === 'boolean'){
        if (value1 === value2) return true;
        return false;
    }
    else {
        console.log("please enter a valid input - comparing only Arrays with Arrays | or Objects with Objects | booleans to booleans.");
    }
}


////////////////////////////////////////////////////////////////////////

// console.log([1, [2], [3, 4], {a: 1, b: 2}].toString().split(','));
// console.log(recursionFlat([1, [2], [3, 4], 'a', ['b', 'c'], {a: 1, b: 2}]));

console.log(deepEqual(true, true));
console.log(deepEqual(1, [1]));
console.log(deepEqual([1, [2, 3]], [1, [2, 3]]));
console.log(deepEqual([1, 2], [2, 1]));
console.log(deepEqual({a: 1, b: 2}, {b: 2, a: 1}))

console.log(deepEqual({a: [1, 2, 3], b: {c: '4'}}, {a: [1, 2, 3], b: {c: '4'}}));
console.log(deepEqual({a: [1, 2, 3], b: {c: 4}}, {a: [1, 2, 3], b: {c: 5}}));