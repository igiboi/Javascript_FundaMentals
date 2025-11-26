/*
RESTATE: Given a full name (first and last name) return the initials in uppercase

INPUTS/OUTPUTS:

getInitials("John Doe")           // returns: "JD"
getInitials("Jane Mary Smith")    // returns: "JMS"
getInitials("bob jones")          // returns: "BJ"  (uppercase!)
getInitials("Alice")              // returns: "A"   (only one name)
getInitials("Mary-Kate Olsen")    // returns: "MO"  (ignore hyphen)


TOOLS:
- split method, "John Doe".split(" ") -> ["John", "Doe"]
- loop through each word
  - access the first character [0]
  -.toUpperCase() 

     
CODE:
*/

function getInitials(fullName) {
  let initials = "";

  let words = fullName.split(" "); // Clear name

  for (let word of words) {
   initials += word[0];
 }

  return initials.toUpperCase();
}