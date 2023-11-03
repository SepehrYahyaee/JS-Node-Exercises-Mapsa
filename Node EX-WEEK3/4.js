function makeRug(a, b, param="#"){
    const result = [];
    for (let i = 0 ; i < a ; i++){
        result.push(param.repeat(b));
    }
    return result;
}

console.log(makeRug(3, 5, "#"));
console.log(makeRug(3, 5, "$"));
console.log(makeRug(2, 2, "A"));