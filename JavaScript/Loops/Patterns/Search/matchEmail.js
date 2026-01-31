// find the matching email within array of objects

const users = [
  { name: "Ana", email: "ana@email.com" },
  { name: "Leo", email: "test@email.com" },
];
 
function findUsers(users, email) {
  for (let user of users) {
    if (user.email === email) {
      return user;
    }
  }
  return null;
}

console.log(findUsers(users, "test@email.com"));