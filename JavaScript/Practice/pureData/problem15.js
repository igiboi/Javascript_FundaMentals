/*

You have an array of blog posts. 
Return a new array of strings in this format: 
"TITLE by AUTHOR", but only for posts published 
after 2020, sorted by year ascending.

*/

const posts = [
  { title: "JavaScript Tips", author: "Alice", year: 2019 },
  { title: "CSS Tricks", author: "Bob", year: 2022 },
  { title: "React Hooks", author: "Carol", year: 2021 },
  { title: "Node Basics", author: "Diana", year: 2018 },
  { title: "TypeScript Guide", author: "Eve", year: 2023 },
];

function sortBlogPost(posts) {
  return posts
    .filter(post => post.year > 2020)
    .sort((a, b) => a.year - b.year)
    .map(post => `${post.title} by ${post.author}`);
}

const result = sortBlogPost(posts);

console.log(result);
