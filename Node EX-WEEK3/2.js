function alphabetIndex(word){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];
    word = word.toLowerCase();
    let result, max;
    max = 0;
    for (const element of word){
        let index = alphabet.indexOf(element) + 1;
        if (index > max){
            max = index;
            result = max + element;
        }
    }
    return result;
}

console.log(alphabetIndex("Flavio"));
console.log(alphabetIndex("Andrey"));
console.log(alphabetIndex("Oscar"));

// --------------------------------------------------------------------------
// راه دوم - مسخره بازی

function alphabetIndex1(word){
    word = word.toLowerCase();
    let num;
    let max = 0;
    for (let i = 0 ; i < word.length ; i++){
    num = word.charCodeAt(i);
    (num > max) ? (max = num) : null;
    }
    return `${max - 96}${String.fromCodePoint(max)}`
}

console.log(alphabetIndex1("Flavio"));
console.log(alphabetIndex1("Andrey"));
console.log(alphabetIndex1("Oscar"));