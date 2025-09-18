
// 2.)
const word = "JavaScript";

const wordLength = word.length;

console.log(wordLength); // 10

// 3.) First and Last letter
function firstAndLast(str) {
    const firstChar = str[0];
    const lastChar = str[str.length - 1];

    return(`The first letter is ${firstChar} and the last letter is ${lastChar}`);
}

console.log(firstAndLast(word));

// 4.) Type checker
function checkType(value) {
    const argType = typeof value;
    
    return `This value is a type of ${argType}`;
}

console.log(checkType("jfkdfjkd"));

console.log(checkType(2));

console.log(checkType(true));

console.log(checkType(null));

let age = 20;

if (age > 18) {
    console.log(true);
}