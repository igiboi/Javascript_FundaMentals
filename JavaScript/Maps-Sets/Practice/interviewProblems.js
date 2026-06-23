// ============================================================
// Interview Practice — Maps, Sets, and Plain Objects
// ============================================================

// ------------------------------------------------------------
// Problem 1 — Group Users by Role
// ------------------------------------------------------------
// A SaaS app returns a list of users from an API.
// Return a Map where each role maps to a Set of usernames
// who have that role.

const users = [
  { username: "j.smith",  role: "admin" },
  { username: "a.jones",  role: "editor" },
  { username: "m.chen",   role: "admin" },
  { username: "r.patel",  role: "viewer" },
  { username: "l.garcia", role: "editor" },
  { username: "t.nguyen", role: "viewer" },
  { username: "s.kim",    role: "admin" },
];

// Expected:
// Map {
//   "admin"  => Set { "j.smith", "m.chen", "s.kim" },
//   "editor" => Set { "a.jones", "l.garcia" },
//   "viewer" => Set { "r.patel", "t.nguyen" }
// }

function groupUsersByRole(users) {
  // your code here
  return users.reduce((userMap, user) => {
    if (!userMap.has(user.role)) userMap.set(user.role, new Set());
    userMap.get(user.role).add(user.username);
    return userMap;
  }, new Map());
}

 console.log(groupUsersByRole(users));


// ------------------------------------------------------------
// Problem 2 — Most Visited Page
// ------------------------------------------------------------
// An analytics service logs every page visit as an array of URL strings.
// Return the URL that was visited most often.
// If there's a tie, return either one.

const pageViews = [
  "/home", "/about", "/home", "/products",
  "/home", "/about", "/products", "/home",
  "/contact", "/products", "/about", "/home",
];

// Expected: "/home"

function mostVisited(pageViews) {
  // your code here
}

// console.log(mostVisited(pageViews));


// ------------------------------------------------------------
// Problem 3 — Mutual Followers
// ------------------------------------------------------------
// A social app stores each user's followers as a Set.
// Return a Set of users who follow BOTH people (the intersection).

const followersOfAna = new Set(["carlos", "priya", "tomás", "jin", "sara"]);
const followersOfBen = new Set(["priya", "tomás", "luke", "sara", "maya"]);

// Expected: Set { "priya", "tomás", "sara" }

function mutualFollowers(a, b) {
  // your code here
}

// console.log(mutualFollowers(followersOfAna, followersOfBen));


// ------------------------------------------------------------
// Problem 4 — Tag Overlap Report
// ------------------------------------------------------------
// A blog platform has two published posts, each with a Set of tags.
// Return a plain object with three properties:
//   - onlyInFirst:  tags that appear only in post A
//   - onlyInSecond: tags that appear only in post B
//   - inBoth:       tags that appear in both

const postATags = new Set(["javascript", "react", "hooks", "frontend"]);
const postBTags = new Set(["javascript", "node", "backend", "hooks"]);

// Expected:
// {
//   onlyInFirst:  Set { "react", "frontend" },
//   onlyInSecond: Set { "node", "backend" },
//   inBoth:       Set { "javascript", "hooks" }
// }

function tagOverlapReport(a, b) {
  // your code here
}

// console.log(tagOverlapReport(postATags, postBTags));
