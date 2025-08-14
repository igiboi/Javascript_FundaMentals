let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number * 2);
})

// arrow function
numbers.forEach(number => console.log(number * 2));

// forEach can take up three arguments:
// the current element, index of the current element and the array
numbers.forEach((number, index, array) => {
    console.log(`Element ${number} is at index ${index} in array ${array}`);
})