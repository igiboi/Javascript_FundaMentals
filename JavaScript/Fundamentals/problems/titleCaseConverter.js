function titleCase(str) {
  let result = '';
  let stringIntoArray = str.split(' ');
  for (let word of stringIntoArray) {
    let capitlizeFirstLetter = word[0].toUpperCase()
    let restofTheWord = word.slice(1).toLowerCase();
    let fullWord = capitlizeFirstLetter + restofTheWord;
    result += fullWord + " ";
  }
  return result.trim();
}

console.log(titleCase("I'm a little tea pot"));

/// version 2

function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
