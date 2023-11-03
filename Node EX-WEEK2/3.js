/*  یک آرایه و دو عدد داریم که این دو عدد ایندکس های شروع و پایان یک آرایه داخلی را نشان میدهند
 تابعی بنویسید که آرایه داخلی موجود در این محدوده را معکوس کند */

 function RangedReverse(arr, a, b){
    let  A = arr.slice(a, b+1).reverse();
    arr.splice(a, A.length, A);
    return (arr.flat());
}

console.log(RangedReverse(arr1, 2, 7))