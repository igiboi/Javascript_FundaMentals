const users = [
  { name: "Alice", verified: true, role: "admin" },
  { name: "Bob", verified: true, role: "user" },
  { name: "Carol", verified: false, role: "user" },
];

// 1. Are all users verified?
const allUsersVerified = users.every(user => user.verified);

// 2. Is at least one user an admin?
const oneUserAdmin = users.some(user => user.role === "admin"); 

console.log(allUsersVerified);
console.log(oneUserAdmin);