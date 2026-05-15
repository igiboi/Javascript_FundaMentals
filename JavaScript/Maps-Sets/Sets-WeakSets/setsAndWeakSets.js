// ============================================================
// Sets & WeakSets — Real-World Scenarios + Interview Practice
// ============================================================


// ─────────────────────────────────────────────────────────────
// SCENARIO 1 — Deduplication (classic interview staple)
// ─────────────────────────────────────────────────────────────
// Users search the same terms multiple times.
// Return only the unique searches, preserving order.

function getUniqueSearches(searches) {
  // your code here
  const uniqueSearches = new Set(searches);

  return Array.from(uniqueSearches);
}

const searches = [
  "react hooks",
  "javascript closures",
  "react hooks",
  "css grid",
  "javascript closures",
];

console.log(getUniqueSearches(searches));
// Expected: ["react hooks", "javascript closures", "css grid"]


// ─────────────────────────────────────────────────────────────
// SCENARIO 2 — Fast membership check
// ─────────────────────────────────────────────────────────────
// A user notification system. You have a list of notification IDs
// the user has already dismissed. Before showing a notification,
// check if it has already been dismissed.

function buildDismissedTracker(dismissedIds) {
  // your code here
  const uniqueNumbers = new Set(dismissedIds);

  return uniqueNumbers;
}

function shouldShowNotification(tracker, notificationId) {
  // your code here
  return tracker.has(notificationId);
}

const dismissed = buildDismissedTracker([101, 203, 305]);

console.log(dismissed);

console.log(shouldShowNotification(dismissed, 203)); // false — already dismissed
console.log(shouldShowNotification(dismissed, 400)); // true  — not dismissed


// ─────────────────────────────────────────────────────────────
// SCENARIO 3 — Finding common items between two lists
// ─────────────────────────────────────────────────────────────
// Two users each have a list of skills. Find the skills they
// both share (the intersection).

function getSharedSkills(skillsA, skillsB) {
  // your code here
  const commonSkills = new Set(skillsB);

  return skillsA.filter((skill) => commonSkills.has(skill));
};

const dev1Skills = ["javascript", "react", "css", "node"];
const dev2Skills = ["python", "react", "css", "django"];

console.log(getSharedSkills(dev1Skills, dev2Skills));
// Expected: ["react", "css"]

/*
Why would you turn one into SET rather just filtering if they are both array

return skillsA.filter(skill => skillsB.includes(skill));

That works. But here's the problem — skillsB.includes() scans the entire array every time. 
So if skillsA has 1000 skills and skillsB has 1000 skills, 
you're doing 1000 × 1000 = 1,000,000 comparisons. That's O(n²).

When you convert skillsB to a Set first, .has() is O(1) — instant lookup every time. 
So now it's 1000 × 1 = 1,000 comparisons. That's O(n).

For small arrays like in our example, you'd never notice the difference. But in a real app say, 
comparing two lists of 10,000 product IDs — the Set version is dramatically faster.

Interviewers love asking exactly this follow-up: "why use a Set instead of just .includes()?" 
Now you have the answer.
*/

// ─────────────────────────────────────────────────────────────
// WEAKSET — Real-World Scenario
// ─────────────────────────────────────────────────────────────
// Track which DOM buttons have already been clicked without
// causing a memory leak. When a button is removed from the DOM,
// the WeakSet releases it automatically.

const clickedButtons = new WeakSet();

function handleButtonClick(buttonElement) {
  if (clickedButtons.has(buttonElement)) {
    console.log("Already clicked — ignoring");
    return;
  }
  clickedButtons.add(buttonElement);
  console.log("Button clicked for the first time");
}

// Simulated usage (in a real app these would be real DOM nodes):
const btn1 = { id: "submit-btn" };
const btn2 = { id: "cancel-btn" };

handleButtonClick(btn1); // "Button clicked for the first time"
handleButtonClick(btn1); // "Already clicked — ignoring"
handleButtonClick(btn2); // "Button clicked for the first time"

// If btn1 were removed from the DOM and no other references held it,
// the WeakSet would release it automatically — no memory leak.


// ─────────────────────────────────────────────────────────────
// INTERVIEW Q&A
// ─────────────────────────────────────────────────────────────
/*
  Q1: What is a Set in JavaScript?
  A: A Set is a collection of unique values. It ignores duplicate entries
     automatically. Values can be any type — primitives or objects.

  Q2: How does Set differ from an Array?
  A: Arrays allow duplicates and are ordered by index.
     Sets enforce uniqueness and don't have index-based access.
     set.has() is O(1); array.includes() is O(n).

  Q3: What is a WeakSet?
  A: A WeakSet stores only objects, and holds weak references to them.
     If no other reference to an object exists, it gets garbage collected
     even if it's still in the WeakSet. WeakSets are not iterable.

  Q4: Why can't you iterate over a WeakSet?
  A: Because the garbage collector can remove entries at any time.
     Iterating over something that can change under you would be unreliable.

  Q5: When would you use a WeakSet over a Set?
  A: When you want to track objects (like DOM nodes) without preventing
     them from being garbage collected when they're no longer needed elsewhere.
*/
