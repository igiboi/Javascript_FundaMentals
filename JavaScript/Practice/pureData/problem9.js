/*

Write a function groupByDepartment that returns an object where each key is a department name and the value is an array of employee names in that department.

Expected output:

{
  Engineering: ["Alice", "Charlie", "Eve"],
  Marketing: ["Bob", "Diana"]
}

*/

const employees = [
  { name: "Alice", department: "Engineering", salary: 95000 },
  { name: "Bob", department: "Marketing", salary: 72000 },
  { name: "Charlie", department: "Engineering", salary: 88000 },
  { name: "Diana", department: "Marketing", salary: 65000 },
  { name: "Eve", department: "Engineering", salary: 102000 },
];


function groupByDepartment(employees) {
  return employees.reduce((acc, curr) => {
    if (!acc[curr.department]) acc[curr.department] = [];
    acc[curr.department].push(curr.name);
    return acc;
  }, {});
}

const result = groupByDepartment(employees);

console.log(result);
