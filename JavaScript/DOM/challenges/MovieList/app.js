 const movies = [
   { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
   { title: "The Dark Knight", genre: "Action", rating: 9.0 },
   { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
   { title: "Parasite", genre: "Thriller", rating: 8.6 },
   { title: "The Matrix", genre: "Sci-Fi", rating: 8.7 },
   { title: "Mad Max: Fury Road", genre: "Action", rating: 8.1 },
   { title: "Get Out", genre: "Thriller", rating: 7.7 },
   { title: "Arrival", genre: "Sci-Fi", rating: 7.9 },
   { title: "John Wick", genre: "Action", rating: 7.4 },
   { title: "Hereditary", genre: "Thriller", rating: 7.3 },
 ];

const searchInput = document.getElementById('search-input');
const genreFilter = document.getElementById('genre-filter');
const sortBtn = document.getElementById('sort-btn');
const movieList = document.getElementById('movie-list');
const resultCount = document.getElementById('result-count');


/*
render takes movieArray as a parameter. I declare a variable result and assign it 
the return value of calling .map() on movieArray. The .map() callback takes each movie object 
and returns a template literal a <div> containing the movie's title, genre, and rating. 
Since .map() returns an array, I chain .join("") to concatenate all the strings into a 
single HTML string."
n 
"I then set movieList.innerHTML to result, which injects that HTML into the DOM. 
Finally, I update resultCount.textContent using a template literal to display 
how many items are in movieArray.
*/
function render(movieArray) {
  const result = movieArray.map((movie) =>
    `<div> ${movie.title} 
    Genre: ${movie.genre} 
    Rating: ${movie.rating}
    </div>`)
    .join("");
  
  movieList.innerHTML = result;
  resultCount.textContent = `Showing ${movieArray.length} results`;
}


/*
Write a getFilteredMovies() function. It should read the current search term and selected genre 
from the DOM, then return a filtered version of the movies array based on both values.
*/
function getFilteredMovies() { 
  //grabs the value for searchInput and genreFilter from the dom. 
  const searchValue = searchInput.value;
  const genreValue = genreFilter.value;
  
  // filter the movie title
  return movies
    .filter((movie) => movie.title.toLowerCase().includes(searchValue.toLowerCase()))
    .filter((movie) => genreValue === "All" || movie.genre === genreValue);
  
}


function handleUpdate() {
  const result = getFilteredMovies();

  render(result);
}

searchInput.addEventListener("input", handleUpdate);

genreFilter.addEventListener('change', handleUpdate);

sortBtn.addEventListener('click', () => {
  const result = getFilteredMovies();

  const sortHighestToLowest = result.sort((a, b) => b.rating - a.rating);

  render(sortHighestToLowest);
})

render(movies);