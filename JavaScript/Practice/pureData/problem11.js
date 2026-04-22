/*
You have an array of employees. Return a new array 
containing only the names of employees who earn more than 50000, 
in alphabetical order.

Expected output:

["Bob", "Carol", "Diana"]
*/
const employees = [
  { name: "Diana", salary: 72000 },
  { name: "Alice", salary: 48000 },
  { name: "Bob", salary: 95000 },
  { name: "Carol", salary: 61000 },
  { name: "Eve", salary: 43000 },
];

function employeesSalary(employees) {
  return employees
    .filter((employee) => employee.salary > 50000)
    .map((employee) => employee.name)
    .sort((a, b) => a.localeCompare(b));
}


const result = employeesSalary(employees);

console.log(result);