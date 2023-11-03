// تابعی بنویسید که یک عدد صحیح را از ورودی بگیرد و نمایش باینری آن را معکوس کرده و دوباره آن را بصورت صحیح برگرداند

function BinaryReverse(Int){
    let bin = Int.toString(2);
    let arr = [...bin];
    arr = arr.reverse();
    reversedInt = Number("0b" + arr.join(""));
    return reversedInt;
}