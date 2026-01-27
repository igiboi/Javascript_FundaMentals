let library = [
  { title: "1984", author: "Orwell", pages: 328, available: true },
  { title: "Dune", author: "Herbert", pages: 412, available: false },
  { title: "Foundation", author: "Asimov", pages: 255, available: true },
];

// Write a function that:
// - Takes a book title as input
// - Returns the number of pages if the book is available
// - Returns "Book not available" if the book exists but is not available
// - Returns "Book not found" if the book doesn't exist in the library

function getBookPages(bookTitle) {
  for (let book of library) {
    if (book.title === bookTitle) {
      if (book.available === true) {
        return book.pages;

      } else {
        return "Book not available";
      }
    }
  }
  return 'Book not found';
}

// Test cases:
console.log(getBookPages("1984")); // Should return 328
console.log(getBookPages("Dune")); // Should return "Book not available"
console.log(getBookPages("Harry Potter")); // Should return "Book not found"