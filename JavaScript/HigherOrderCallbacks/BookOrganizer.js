const books = [
  {
    title: "What Life is not",
    authorName: "Kapil Gupta",
    releaseYear: 1999,
  },
  {
    title: "Don Quixote",
    authorName: "Miguel de Cervantes",
    releaseYear: 2018,
  },
  {
    title: "The Adventures of Huckleberry Finn",
    authorName: "Mark Twain",
    releaseYear: 2001,
  },
  {
    title: "Of Mice and Men",
    authorName: "John Steinbeck",
    releaseYear: 1937,
  },
];

const sortByYear = (book1, book2) => {
  if (Number(book1.releaseYear) < Number(book2.releaseYear)) {
    return -1;
  } else if (Number(book1.releaseYear) > Number(book2.releaseYear)) {
    return 1;
  } else {
    return 0;
  }
};

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);