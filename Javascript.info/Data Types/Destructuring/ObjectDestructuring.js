let options = {
    title: 'Menu',
    width: 100,
    height: 200
};

let { title, width, height } = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200

// Properties options.title, options.width and options.height are assigned to the corresponding variables.

// Changing property names

// { sourceProperty: targetVariable }
let {width: w, height: h, title: t} = options;

//“what : goes where”
// width -> w
// height -> h
// title -> t


// title = property named title
// rest = object with the rest of properties
let { titleRest, ...rest } = options;

console.log(rest.height); // 200

// Destructure this array 
const numbers = [100, 200, 300];

let [first, , third] = [100, 200, 300];

const settings = { theme: 'dark', fontSize: 18 };

let { theme: currentTheme, language = 'en' } = settings;

let user = {
  name: 'John',
  years: 30,
};

let { name: name, years: age, isAdmin = false } = user;

console.log(isAdmin); 

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 600 },
  { name: 'Monitor', price: 300 },
];

function mostExpensiveProduct(products) {
  let maxPrice = 0;
  let maxName = null;

  for (const { name, price } of products) {
    if (price > maxPrice) {
      maxPrice = price;
      maxName = name;
    }
  }

  return maxName;
}
console.log(mostExpensiveProduct(products));