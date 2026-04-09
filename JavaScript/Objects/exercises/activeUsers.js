/*

Write a function activateUsers that returns a new array where 
every user with active: false has been updated to active: true. 
All other properties stay the same.

Expected output:
[
  { id: 1, name: "Alice", role: "user", active: true },
  { id: 2, name: "Bob", role: "user", active: true },  // changed
  { id: 3, name: "Charlie", role: "admin", active: true },
  { id: 4, name: "Diana", role: "user", active: true },
]

*/

const users = [
  { id: 1, name: "Alice", role: "user", active: true },
  { id: 2, name: "Bob", role: "user", active: false },
  { id: 3, name: "Charlie", role: "admin", active: true },
  { id: 4, name: "Diana", role: "user", active: true },
];

function activateUsers(users) {
  return users.map((user) => {
    if (user.active === false) {
      return { ...user, active: true };
    }
    return user;
  });
}

const result = activateUsers(users);

console.log(result);