// تابعی بنویسید که عددی بین 0 تا 30 دریافت کند و سپس مقسوم علیه های اول آن را پیدا کرده و چاپ کند

function primeDivisors(num){
    const result = [];
    for (let i = 2 ; i <= num ; i++){
        if (num % i !== 0){
            continue;
        } else if(num % i === 0){
            let flag = true;
            for (let j = 2 ; j < i ; j++){
                if (i % j === 0){
                    flag = false;
                    break;
                }
            }
            if (flag){
                result.push(i);
            }
        }
    }
    return result;
}
// راه دومش اینه که اول بودن عددارو از 2 تا یکی کمتر از اون عدد بسازی و هر بار عددو بهش تقسیم کنی اگر باقی مانده 0 بود جوابه

function primeDivisors1(num){
    const result = [];
    for (let i = 2 ; i <= num ; i++){
        let flag = true;
        for (let j = 2 ; j < i ; j++){
            if (i % j === 0){
                flag = false;
                break;
            }
        }
        if (flag){
            if (num % i === 0){
                result.push(i);
            }
        }
    }
    return result;
}

console.log(primeDivisors(20));
console.log(primeDivisors(24));
console.log(primeDivisors(13));

console.log(primeDivisors1(20));
console.log(primeDivisors1(24));
console.log(primeDivisors1(13));