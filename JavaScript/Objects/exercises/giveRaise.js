/*
Write a function giveRaise that takes the employees array 
and a department name, and returns a new array where 
every employee in that department gets a 10% salary increase. 
All other employees stay unchanged.

Expected output when called with "Engineering":

[
  { id: 1, name: "Alice", department: "Engineering", salary: 82500 },
  { id: 2, name: "Bob", department: "Marketing", salary: 55000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 88000 },
  { id: 4, name: "Diana", department: "Marketing", salary: 60000 },
  { id: 5, name: "Eve", department: "Engineering", salary: 99000 },
]
*/

const employees = [
  { id: 1, name: "Alice", department: "Engineering", salary: 75000 },
  { id: 2, name: "Bob", department: "Marketing", salary: 55000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
  { id: 4, name: "Diana", department: "Marketing", salary: 60000 },
  { id: 5, name: "Eve", department: "Engineering", salary: 90000 },
];


function giveRaise(employees, department) {
  return employees.map((employee) => {
    if (employee.department === department) {
      return { ...employee, salary: Math.round(employee.salary * 1.1) };
    }
    return employee;
  })
}

const result = giveRaise(employees, "Engineering");

console.log(result);