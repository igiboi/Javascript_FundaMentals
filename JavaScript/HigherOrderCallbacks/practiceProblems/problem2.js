const employees = [
  { name: "Alice", department: "Engineering", salary: 95000, active: true },
  { name: "Bob", department: "Marketing", salary: 62000, active: true },
  { name: "Charlie", department: "Engineering", salary: 88000, active: false },
  { name: "Diana", department: "HR", salary: 71000, active: true },
  { name: "Eve", department: "Marketing", salary: 74000, active: true },
  { name: "Frank", department: "Engineering", salary: 102000, active: true },
];

// Problem 1 — Get the names of all active employees, sorted alphabetically.
function getActiveEmployees(employees) {
  return employees
    .filter(employee => employee.active)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(employee => employee.name);
}

console.log(getActiveEmployees(employees));

function getAverageSalary(employees) {
  const sumSalary = employees
    .reduce((accumulate, employee) => accumulate + employee.salary, 0);
  
  return sumSalary / employees.length;
}

function groupByDepartment(employees) {
  return employees.reduce((accumulate, employee) => {
    if (!accumulate[employee.department]) {
      accumulate[employee.department] = []; // translate to department: []
    }
    accumulate[employee.department].push(employee.name);
    return accumulate;
  }, {});
}

console.log(groupByDepartment(employees));