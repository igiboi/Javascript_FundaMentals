const posts = [
  { title: "JS Basics", tags: ["javascript", "beginner"] },
  { title: "Array Methods", tags: ["javascript", "arrays"] },
  { title: "Intro to Sets", tags: ["javascript", "sets"] },
  { title: "CSS Grid", tags: ["css", "beginner"] },
];

// Given an array of posts, return a Map where each unique tag
// maps to a Set of post titles that use that tag.
function groupAndDeduplicateTags(posts) {
  return posts.reduce((postMap, post) => {
    post.tags.forEach((tag) => {
      if (!postMap.has(tag)) postMap.set(tag, new Set());
      postMap.get(tag).add(post.title);
    });
    return postMap;
  }, new Map());
}


console.log(groupAndDeduplicateTags(posts));
// console.log(groupAndDeduplicateTagsPlainObject(posts));

// Expected output (Map):
// "javascript" → Set { "JS Basics", "Array Methods", "Intro to Sets" }
// "beginner"   → Set { "JS Basics", "CSS Grid" }
// "arrays"     → Set { "Array Methods" }
// "sets"       → Set { "Intro to Sets" }
// "css"        → Set { "CSS Grid" }
