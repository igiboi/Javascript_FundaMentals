const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const postsContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

function timeAgo(time) {
  const date = new Date(time);

  const msDifference = Date.now() - date.getTime();

  const minutes = msDifference / (1000 * 60);

  if (minutes < 60) {
    return `${Math.floor(minutes)}m ago`;
  } else if (minutes / 60 < 24) {
    return `${Math.floor(minutes / 60)}h ago`;
  } else {
    return `${Math.floor(minutes / (60 * 24))}d ago`;
  }
}

function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }

  return views;
}

function forumCategory(id) {
  let categoryName;
  let className;

  if (allCategories.hasOwnProperty(id)) {
    categoryName = allCategories[id].category;
    className = allCategories[id].className;
  } else {
    categoryName = "General";
    className = "general";
  }

  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${categoryName}</a>`;
}

function avatars(posters, users) {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);
      const avatar = user.avatar_template.replace("{size}", 30);
      const userAvatarUrl = avatar.startsWith("/")
        ? `${avatarUrl}${avatar}`
        : avatar;

      return `<img src="${userAvatarUrl}" alt="${user.name}" />`;
    })
    .join("");
}

function showLatestPosts(data) {
  const { users, topic_list } = data;
  const { topics } = topic_list;

  postsContainer.innerHTML = topics
    .map((topic) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = topic;

      return `
        <tr>
          <td>
            <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
            ${forumCategory(category_id)}
          </td>
          <td>
            <div class="avatar-container">${avatars(posters, users)}</div>
          </td>
          <td>${posts_count - 1}</td>
          <td>${viewCount(views)}</td>
          <td>${timeAgo(bumped_at)}</td>
        </tr>
      `;
    })
    .join("");
}

async function fetchData() {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();