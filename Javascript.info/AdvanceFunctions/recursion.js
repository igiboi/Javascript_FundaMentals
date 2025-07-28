function sumTo(n) {
  console.log('Calling sumTo(' + n + ')');

  if (n === 1) {
    console.log('Base case hit! Returning 1');
    return 1;
  }

  const result = n + sumTo(n - 1);
  console.log(`Returning ${result} from sumTo(${n})`);
  return result;
}

sumTo(3);

function pow(x, n) {
  if (n === 1) return x;
  return x * pow(x, n - 1);
}

// 2 * pow(2, 2)
// →     2 * pow(2, 1)
// →         2          ← base case hit (n === 1)

// →     2 * 2 = 4       ← pow(2, 2) returns 4

// → 2 * 4 = 8           ← pow(2, 3) returns 8 ✅


// sumSalaries.js

const company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 }
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 }
    ],
    internals: [
      { name: 'Jack', salary: 1300 }
    ]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((sum, employee) => sum + employee.salary, 0);
  }

  let sum = 0;
  for (const subdep of Object.values(department)) {
    sum += sumSalaries(subdep);
  }
  return sum;
}

console.log("💰 Total salaries:", sumSalaries(company));

const employees = [
  { name: 'John', salary: 1000 },
  { name: 'Alice', salary: 1600 },
  { name: 'Peter', salary: 2000 }
];

function sumArraySalaries(arr) {
   return arr.reduce((sum, employee) => sum + employee.salary, 0);
}

console.log(sumArraySalaries(employees)); // Should print 4600

// Write a function that can handle this nested department object:

const simpleCompany = {
  devs: [
    { name: 'Luigi', salary: 2500 },
    { name: 'Mario', salary: 1800 },
  ],
  marketing: {
    social: [{ name: 'Peach', salary: 1600 }],
  },
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        //base case: sum array salaires
        return department.reduce((sum, department) => sum + department.salary, 0);
    } else {
        let sum = 0;
        for (const subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
    }
}

const companyCount = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

function countEmployees(department) {
  if (Array.isArray(department)) {
    // base case: count employees in the array
    return department.length;
  } else {
    let count = 0;
    for (const subdep of Object.values(department)) {
      count += countEmployees(subdep);
    }
    return count;
  }
}

console.log(countEmployees(companyCount));

const nums = [1, 2, 3, 4, 5];

function sumArrayForLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArrayForLoop(nums)); // should print 15

function sumArrayforIn(arr) {
  let sum = 0;
  for (number of arr) {
    sum += number;
  }
  return sum; 
}

console.log(sumArrayforIn(nums));

function sumArrayRecursive(arr) {
  // base case: if array is empty, return 0
 if (arr.length === 0) return 0;
  return arr[0] + sumArrayRecursive(arr.slice(1));
}

console.log(sumArrayRecursive(nums));

function countStrings(input) {
  if (typeof input === 'string') return 1;

  let count = 0;

  if (Array.isArray(input)) {
    for (const item of input) {
      count += countStrings(item); // recursive call on each item
    }
  }

  return count;
}
