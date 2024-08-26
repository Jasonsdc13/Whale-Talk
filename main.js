const input = 'turpentine and turtles!';

const vowel = ['a', 'e', 'i', 'o', 'u'];

let resultArray = []

for (let inputi = 0; inputi < input.length; inputi++) {
    // console.log(inputi);

    if(input[inputi] === 'e') {
        resultArray.push(input[inputi])
    }
    if(input[inputi] === 'u') {
        resultArray.push(input[inputi])
    }

for(let voweli = 0; voweli < vowel.length; voweli++) {
// console.log(vowelindex);

if(input[inputi] === vowel[voweli]){
    // console.log(input[inputindex]);
    
    resultArray.push(input[inputi]);
    }
}
}

const resultString = resultArray.join('').toUpperCase();

console.log(resultString);
