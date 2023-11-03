let a, b, c;
// a < b < c
for (a = 3 ; a < 1000 ; a++){
    for (b = 4 ; b < 1000 ; b++){
        c = Math.sqrt(a ** 2 + b ** 2);
        if (a + b + c === 1000){
            // console.log(a, b, c);
            console.log(`the product of abc is ${a * b * c} which A is ${a} and B is ${b} and C is ${c}`); // 31875000 is the answer to this code!
            break;
        }
    }
}

/* I wrote Break after reaching the answer but why does it still find the value twice ??????????????? */