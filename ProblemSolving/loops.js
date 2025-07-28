let arr = [1, 2, 3, 4];

function printEach(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log(printEach(arr));


function doubleNumbers(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        multipliedNumbers = arr[i] * 2;

        newArr.push(multipliedNumbers);
    }
    return newArr;
}

console.log(doubleNumbers(arr));

function printBackward(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

console.log(printBackward(arr));

function sumEven(arr) {
    let sum = 0;
    // use a loop to only add even numbers
    
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 === 0) {
        sum += arr[i];
    }

    }
    return sum; 

}

console.log(sumEven(arr));

function countVowles(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowles('hello'));