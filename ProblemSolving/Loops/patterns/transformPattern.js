/*
Problem:
  Given an array of email addresses, return an array of just the domains(part after @)


Examples:

getEmailDomains([
  "john@gmail.com",
  "jane@yahoo.com",
  "bob@gmail.com"
])
// returns: ["gmail.com", "yahoo.com", "gmail.com"]

getEmailDomains([
  "test@example.org"
])
// returns: ["example.org"]

getEmailDomains([])
// returns: []

getEmailDomains([
  "admin@company.co.uk",
  "support@company.co.uk"
])
// returns: ["company.co.uk", "company.co.uk"]

PsuedoCode

this function is given an array of strings and we need to only select the string after @
this is a filter pattern 

function filterPattern(items) {
  let result = [];
  for (let item of items) {
    if (condition) {
      result.push(item);
  }
}
  return result;
}

so we receive an array, 
we loop through that array
we check for each element does it have an @? 
 and if it does 
 we grab what is after that @ and 
 push it to the new array we built
then outside of that scope 
we return the result

Hints:
String method you'll need:
javascript"john@gmail.com".split("@")
// returns: ["john", "gmail.com"]


*/

function getEmailDomains(domains) {
  let result = [];

  for (let domain of domains) {
    let part = domain.split("@")
      result.push(part[1]);
    }
  return result;
}


console.log("Test 1:", getEmailDomains([
  "john@gmail.com",
  "jane@yahoo.com",
  "bob@gmail.com"
]));
// Expected: ["gmail.com", "yahoo.com", "gmail.com"]

console.log("Test 2:", getEmailDomains([
  "test@example.org"
]));
// Expected: ["example.org"]

console.log("Test 3:", getEmailDomains([]));
// Expected: []

console.log("Test 4:", getEmailDomains([
  "admin@company.co.uk",
  "support@company.co.uk"
]));
// Expected: ["company.co.uk", "company.co.uk"]