// تابعی بنویسید که بررسی کند که آیا یک عدد صحیح داده شده فاکتوریل یک عدد دیگر است یا خیر

function Factorial(num){
    for (f = num, i = num - 1 ; i !== 1 ; f *= i, i--);
    return f;
}

function isFactorial(num){
    let FactorialArray = [];
    for (i = 1; i <= 5000 ; i++){
        FactorialArray.push(Factorial(i));
    }
    if (FactorialArray.includes(num)){
        return true;
    }
    else{
        return false;
    }
}

// مشکل اصلی کد اینه که نمیدونم تا کجا قراره فاکتوریل و حساب کنه تهش زدم 5000 که بعد ازون بی نهایت به حساب میاد