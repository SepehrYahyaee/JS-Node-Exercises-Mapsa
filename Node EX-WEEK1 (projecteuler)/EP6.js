let i, j;
let sum_of_the_squares = squares_of_the_sum = 0;

for (i = 1 ; i < 101 ; i++){
    sum_of_the_squares = sum_of_the_squares + (i ** 2);
}

for (j = 1 ; j < 101 ; j++){
    squares_of_the_sum = squares_of_the_sum + j;
}

console.log((squares_of_the_sum ** 2) - sum_of_the_squares); // 25164150 is the answer of this code!