function soal4(arr, num){
    let result = [];
    for (let item of arr){
        for (let index in arr){
            if (arr[arr.indexOf(item)] === Number(index)) continue;
            if (item + arr[Number(index)] === num){
                result.push([item, arr[Number(index)]]);
                item = 0;
                arr[Number(index)] = 0;
            }
        }
    }
    return result;
}

console.log(soal4([1, 5, 6, 1, 0, 1], 6));

module.exports = {
    soal4,
}