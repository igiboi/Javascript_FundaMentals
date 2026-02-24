function convertHTML(str) {
  // lookup object with special characters and their html entities
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  // result variable to build the new string
  let result = "";
  // loop through each character in str
  for (const character of str) {
    // if the character is in the lookup object
    if (htmlEntities[character]) {
      // add the html entity to result
      result += htmlEntities[character];
    } else {
      // add the character as-is to result
      result += character;
    }
  }
  // return result
  return result;
}


// Methods
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((char) => htmlEntities[char] || char)
    .join("");
}
