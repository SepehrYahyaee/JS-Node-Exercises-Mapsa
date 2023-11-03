// تابعی بنویسیم که آرایه ای از اعداد بسازد تا مقادیر بین 0 تا یک مقدار مشخص را با گام های مشخص طی کند

function genValues(a, b){
    const myArray = [0.0];
    while (myArray[myArray.length - 1] !== a){
        myArray.push((myArray[myArray.length - 1]) + b);
    }
    return myArray;
}

console.log(genValues(20, 2));

// احتمالا بخاطر مشکل جمع اعشاری روی مثال دوم جواب نمیده
// 0.1 + 0.2 = .....