/*
  Nested Object Drills
  ---------------------
  Practice accessing and updating properties on objects
  that are nested inside other objects.
*/

const user = {
  id: 1,
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001",
    country: "USA"
  },
  job: {
    title: "Engineer",
    company: "TechCorp",
    salary: 95000
  }
};

// ---- DRILL 1: Access a nested property ----
// Log the user's city
// your code here
console.log(user.address.city);
// expected: "New York"

// Log the user's job title
// your code here
console.log(user.job.title);
// expected: "Engineer"


// ---- DRILL 2: Access using a variable ----
const section = "address";
const field = "zip";

// Using section and field variables, access user.address.zip
// your code here
console.log(user[section][field]);
// expected: "10001"


// ---- DRILL 3: Update a nested property ----
// Change the user's city to "Los Angeles"
// your code here

user.address.city = "Los Angeles";
console.log(user.address.city); // expected: "Los Angeles"


// ---- DRILL 4: Add a new nested property ----
// Add a new property called "remote" to user.job and set it to true
// your code here
user.job.remote = true;
console.log(user.job.remote); // expected: true


// ---- DRILL 5: Loop over a nested object ----

const user = {
  id: 1,
  name: "Alice",
  address: {
    city: "New York",
    zip: "10001",
    country: "USA",
  },
  job: {
    title: "Engineer",
    company: "TechCorp",
    salary: 95000,
  },
};

const entries = Object.entries(user.job);

for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

// Using Object.entries(), log each key and value inside user.job
// expected output:
// title: Engineer
// company: TechCorp
// salary: 95000
// your code here
