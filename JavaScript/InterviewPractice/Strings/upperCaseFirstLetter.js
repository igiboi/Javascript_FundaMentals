const sentence = "hello world";

const capitalized = sentence
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalized);