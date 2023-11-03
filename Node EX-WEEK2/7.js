// تابعی بنویسید که آرایه ای از اعداد را بگیرد و بزرگترین مقسوم علیه مشترک آنها را برگرداند

// function GCD2(a, b){
//     let max = 0;
//         for (i = 2 ; i <= a && i <= b ; i++){
//             if (a % i === 0 && b % i === 0){
//                 if (max < i){
//                     max = i;
//                 };
//             }
//         }
//         return max;
// };


function GCD(arr){
    let max = 0;
    arr = arr.sort((a, b) => a - b); // مرتب سازی بر اساس عدد کوچکتر به بزرگتر
    arr.reduce((a, b) => {
        for (i = 2 ; (i <= a || i <= b) ; i++){
            if (a % i === 0 && b % i === 0){
                if (max < i){
                    max = i;
                };
            };
        };
    }, arr[1]);
    return max;
};

console.log(GCD([84, 70, 42, 56]));
console.log(GCD([19, 38, 76, 133]));
console.log(GCD([120, 300, 95, 425, 625]));