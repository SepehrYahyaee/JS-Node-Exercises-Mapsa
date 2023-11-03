let i, j, product, a, b;
let max = 0;

for (i = 999 ; i > 100 ; i--){
    for (j = 999 ; j > 100 ; j--){
        product = i * j;
        // console.log(product);
        product = product + "";
        if ((product[0] === product[5]) && (product[1] === product[4]) && (product[2] === product[3])){
            if (max < product){
                max = product;
                a = i,
                b = j;
            }
        }
    }
}
console.log(max, "->", a, "x", b);

/* since I know that, largest palindrome number that is the product of two 3-digit numbers would be maximum a 6-digit number,
this method works, But I don't know about the overall algorythm!
*/