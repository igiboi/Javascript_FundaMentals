/*

Write a function addReply(posts, commentId, replyText) that 
returns a new array where the reply is added to the correct 
comment's replies array based on commentId.

So addReply(posts, 3, "Great explanation!") adds { text: "Great explanation!" } to comment id 3's replies.

*/

const posts = [
  {
    id: 1,
    title: "Learning JavaScript",
    comments: [
      { id: 1, text: "Great post!", replies: [] },
      { id: 2, text: "Very helpful", replies: [] },
    ],
  },
  {
    id: 2,
    title: "Understanding React",
    comments: [
      { id: 3, text: "Love this!", replies: [] },
      { id: 4, text: "Need more examples", replies: [] },
    ],
  },
];

function addReply(posts, commentId, replyText) {
  return posts.map((post) => {
    return {
      ...post,
      comments: post.comments.map((comment) => {
        if (commentId === comment.id) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                text: replyText,
              },
            ],
          };
        }
        return comment;
      }),
    };
  });
}

const result = addReply(posts, 3, "Great explanation!");

console.log(JSON.stringify(result, null, 2));