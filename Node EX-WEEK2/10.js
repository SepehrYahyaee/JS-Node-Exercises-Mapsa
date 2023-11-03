// تابعی بنویسید که رشته ای از اعداد را در ورودی بگیرد
// و طولانی ترین رشته ای که دارای ارقام زوج و فرد یا فرد و زوج یکی در میان است را برگرداند

function longestSubstring(str){
    let arr = [...str];
    let newArr = [];
    let max = 0;
    let result;
    arr.map((val, index) => {
        if ((Number(val) + Number(arr[index+1])) % 2 !== 0){
            newArr.push(val);
        } else if (((Number(val) + Number(arr[index+1])) % 2 === 0) && ((Number(val) + Number(arr[index-1])) % 2 !== 0)){
            newArr.push(val);
            newArr.push("-");
        }
    })
    newArr = newArr.join("");
    newArr = newArr.split("-");
    for (let element of newArr){
        if (element.length > max){
            max = element.length;
            result = element;
        }
    }
    return result;
}
    
let str = "225424272163254474441338664823"; // 272163254
let str1 = "594127169973391692147228678476"; // 16921472
let str2 = "721449827599186159274227324466";

console.log(longestSubstring(str));
console.log(longestSubstring(str1));
console.log(longestSubstring(str2));