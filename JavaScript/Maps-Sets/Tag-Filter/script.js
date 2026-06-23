const posts = [
  { title: "JS Basics", author: "Luigi", tags: ["javascript", "beginner"] },
  { title: "Array Methods", author: "Luigi", tags: ["javascript", "arrays"] },
  { title: "Intro to Sets", author: "Luigi", tags: ["javascript", "sets"] },
  { title: "CSS Grid", author: "Luigi", tags: ["css", "beginner"] },
  { title: "DOM Events", author: "Luigi", tags: ["javascript", "dom"] },
  { title: "Flexbox Guide", author: "Luigi", tags: ["css", "beginner"] },
];

// Step 1: Build a Set of all unique tags
// your code here
const uniqueTags = new Set();

posts.forEach((post) => {
  post.tags.forEach((tag) => {
    uniqueTags.add(tag);
  })
});

// Step 2: Build a Map of tag → Set of post titles
// your code here
const postTitles = new Map();

posts.forEach((post) => {
  post.tags.forEach((tag) => {
    if (!postTitles.has(tag)) postTitles.set(tag, new Set());
    postTitles.get(tag).add(post.title);
  })
})

// Step 3: Render tag buttons to #tag-buttons
// your code here
const tagButtons = document.getElementById('tag-buttons');

uniqueTags.forEach((uniqueTag) => {
  const button = document.createElement('button');
  tagButtons.appendChild(button);
  button.textContent = uniqueTag;
  button.addEventListener("click", () => {
    const cards = document.querySelectorAll(".post-card");
    cards.forEach((card) => {
      card.style.display = 'none';
    });
    const titles = postTitles.get(uniqueTag);

  });

})

// Step 4: Render post cards to #posts-container
// your code here
const postContainer = document.getElementById('posts-container');

posts.forEach((post) => {
  const card =`<div class="post-card">
  <h2>${post.title}</h2>
  <p>${post.author}</p>
  <div class="tags">
    ${post.tags.map((tag) =>
    `<span class="tag">${tag}</span>`).join("")}
  </div>
</div>
`
  postContainer.insertAdjacentHTML("beforeend", card);
  ;
});

// Step 5: Filter posts when a tag button is clicked
// your code here

