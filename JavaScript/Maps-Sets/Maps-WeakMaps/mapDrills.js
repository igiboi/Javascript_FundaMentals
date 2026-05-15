// ============================================================
// Map Drills — Interview Coding Practice
// ============================================================


// ─────────────────────────────────────────────────────────────
// DRILL 1 — Build a lookup Map from an array
// ─────────────────────────────────────────────────────────────
// Real world: you fetch a list of products from an API and need
// to look them up by ID instantly throughout the app.

const products = [
  { id: 101, name: "Keyboard", price: 79.99 },
  { id: 102, name: "Monitor", price: 299.99 },
  { id: 103, name: "Mouse", price: 49.99 },
];

function buildProductMap(products) {
  // Convert the array into a Map where the key is product.id
  // and the value is the full product object.
  // Use .reduce()
  return products.reduce((map, product) => {
    map.set(product.id, product);
    return map;
  }, new Map());
}

const productMap = buildProductMap(products);
console.log(productMap.get(102));
// Expected: { id: 102, name: "Monitor", price: 299.99 }


// ─────────────────────────────────────────────────────────────
// DRILL 2 — Count occurrences
// ─────────────────────────────────────────────────────────────
// Real world: analytics dashboard tracking which pages users visit.

const pageVisits = ["home", "about", "home", "products", "home", "about"];

function countVisits(pages) {
  // Return a Map where each page is a key and the value is
  // how many times it was visited.
  return pages.reduce((map, page) => {
    map.set(page, (map.get(page) || 0) + 1);
    return map;
  }, new Map());
}

/*
pageVisits = ["home", "about", "home", "products", "home", "about"]

iteration 1: page = "home"
  map.get("home") → undefined
  (undefined || 0) + 1 → 1
  map.set("home", 1)
  Map: { "home" => 1 }

iteration 2: page = "about"
  map.get("about") → undefined
  (undefined || 0) + 1 → 1
  map.set("about", 1)
  Map: { "home" => 1, "about" => 1 }

iteration 3: page = "home"
  map.get("home") → 1
  (1 || 0) + 1 → 2
  map.set("home", 2)
  Map: { "home" => 2, "about" => 1 }

iteration 4: page = "products"
  map.get("products") → undefined
  (undefined || 0) + 1 → 1
  map.set("products", 1)
  Map: { "home" => 2, "about" => 1, "products" => 1 }

iteration 5: page = "home"
  map.get("home") → 2
  (2 || 0) + 1 → 3
  map.set("home", 3)
  Map: { "home" => 3, "about" => 1, "products" => 1 }

iteration 6: page = "about"
  map.get("about") → 1
  (1 || 0) + 1 → 2
  map.set("about", 2)
  Map: { "home" => 3, "about" => 2, "products" => 1 }

*/

const visitMap = countVisits(pageVisits);
console.log(visitMap.get("home"));     // 3
console.log(visitMap.get("about"));    // 2
console.log(visitMap.get("products")); // 1


// ─────────────────────────────────────────────────────────────
// DRILL 3 — Group users by role
// ─────────────────────────────────────────────────────────────
// Real world: admin dashboard that displays users grouped by role.

const users = [
  { name: "Luigi", role: "admin" },
  { name: "Mario", role: "editor" },
  { name: "Peach", role: "admin" },
  { name: "Toad", role: "viewer" },
  { name: "Yoshi", role: "editor" },
];

  // Return a Map where each key is a role and the value is
  // an array of users with that role.
function groupByRole(users) {
  // Return a Map where each key is a role and the value is
  // an array of users with that role.
  return users.reduce((map, user) => {
    map.set(user.role, [...(map.get(user.role) || []), user]);
    return map;
  }, new Map());
};

/* 

iteration 1: user = { name: "Luigi", role: "admin" }
  map.get("admin") → undefined
  [...(undefined || []), user] → ["Luigi obj"]
  map.set("admin", [{ name: "Luigi", role: "admin" }])

iteration 2: user = { name: "Mario", role: "editor" }
  map.get("editor") → undefined
  [...(undefined || []), user] → ["Mario obj"]
  map.set("editor", [{ name: "Mario", role: "editor" }])

iteration 3: user = { name: "Peach", role: "admin" }
  map.get("admin") → [{ name: "Luigi", role: "admin" }]
  [...existing, user] → [Luigi obj, Peach obj]
  map.set("admin", [Luigi, Peach])

*/

const roleMap = groupByRole(users);
console.log(roleMap.get("admin"));
// Expected: [{ name: "Luigi", role: "admin" }, { name: "Peach", role: "admin" }]
console.log(roleMap.get("editor"));
// Expected: [{ name: "Mario", role: "editor" }, { name: "Yoshi", role: "editor" }]


// ─────────────────────────────────────────────────────────────
// DRILL 4 — Find duplicate emails
// ─────────────────────────────────────────────────────────────
// Real world: user registration system that rejects duplicate emails.

const emails = [
  "luigi@example.com",
  "mario@example.com",
  "luigi@example.com",
  "peach@example.com",
  "mario@example.com",
];

function findDuplicateEmails(emails) {
  // Return an array of emails that appear more than once.
  // Use a Map to count occurrences first.
  const countEmails = emails.reduce((map, email) => {
    map.set(email, (map.get(email) || 0) + 1);
    return map;
  }, new Map());

  return [...countEmails]
    .filter(([, count]) => count > 1)
    .map(([email]) => email);
}

console.log(findDuplicateEmails(emails));
// Expected: ["luigi@example.com", "mario@example.com"]


// ─────────────────────────────────────────────────────────────
// DRILL 5 — Merge two Maps
// ─────────────────────────────────────────────────────────────
// Real world: combining scores from two separate game rounds.

const round1 = new Map([
  ["Luigi", 10],
  ["Mario", 8],
]);

const round2 = new Map([
  ["Mario", 5],
  ["Peach", 12],
]);

function mergeScores(mapA, mapB) {
  // Return a new Map with all players.
  // If a player appears in both maps, add their scores together.
  const result = new Map(mapA);

  mapB.forEach((value, key) => {
    if (result.has(key)) {
      result.set(key, result.get(key) + value);
    } else {
      result.set(key, value);
    }
  });

  return result;
}

const finalScores = mergeScores(round1, round2);
console.log(finalScores.get("Luigi")); // 10
console.log(finalScores.get("Mario")); // 13 (8 + 5)
console.log(finalScores.get("Peach")); // 12
