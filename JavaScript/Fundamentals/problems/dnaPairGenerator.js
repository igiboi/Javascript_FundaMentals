function pairElement(str) {
  let result = [];

  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // loop through str
  for (let letters of str) {
    result.push([letters, pairs[letters]]);
  }
  return result; 
}


// Methods
function pairElement(str) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return str.split("").map((letter) => [letter, pairs[letter]]);
}
