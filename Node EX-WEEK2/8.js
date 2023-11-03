// مثال آرایه عدد وزن محصولات کارخانه

function Box(arr){
    let sum = counter = 0;
    arr.forEach((val, index) => {
        sum += val;
        if (sum === 10){
            counter += 1;
            sum = 0;
        } else if (sum + arr[index+1] > 10){
            counter += 1;
            sum = 0;
        } else if (index === arr.length - 1){
            counter += 1;
            sum = 0;
        }
    })
    return counter;
}

console.log(Box([2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2])); // تعداد جعبه های مورد نیاز را به ما می دهد