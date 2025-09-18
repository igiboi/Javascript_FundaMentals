function getLastChar(str) {
  const lastChar = str[str.length - 1];

  return lastChar;
}

console.log(getLastChar('Luigi')); // i

function capitalize(str) {
  const firstChar = str[0].toUpperCase();
  const restOfChar = str.slice(1);

  return firstChar + restOfChar;
}

console.log(capitalize('john'));

function reverseString(str) {
  // str = h e l l o
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString('hello'));
