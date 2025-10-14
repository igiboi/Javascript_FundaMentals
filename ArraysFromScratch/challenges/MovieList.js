// ========================================
// MOVIE WATCHLIST MANAGER PROJECT
// ========================================
// Build features for a Netflix-style watchlist manager
// Each feature teaches you important array method patterns
// Work through them in order - they build on each other!

console.log("🎬 Movie Watchlist Manager\n");

// ========================================
// THE DATA
// ========================================
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    year: 1994,
    runtime: 142,
    watched: true,
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    year: 2008,
    runtime: 152,
    watched: true,
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    year: 2010,
    runtime: 148,
    watched: false,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 8.9,
    year: 1994,
    runtime: 154,
    watched: true,
  },
  {
    id: 5,
    title: "Forrest Gump",
    genre: "Drama",
    rating: 8.8,
    year: 1994,
    runtime: 142,
    watched: false,
  },
  {
    id: 6,
    title: "The Matrix",
    genre: "Sci-Fi",
    rating: 8.7,
    year: 1999,
    runtime: 136,
    watched: true,
  },
  {
    id: 7,
    title: "Goodfellas",
    genre: "Crime",
    rating: 8.7,
    year: 1990,
    runtime: 145,
    watched: false,
  },
  {
    id: 8,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    year: 2014,
    runtime: 169,
    watched: false,
  },
  {
    id: 9,
    title: "The Silence of the Lambs",
    genre: "Thriller",
    rating: 8.6,
    year: 1991,
    runtime: 118,
    watched: true,
  },
  {
    id: 10,
    title: "Saving Private Ryan",
    genre: "War",
    rating: 8.6,
    year: 1998,
    runtime: 169,
    watched: false,
  },
  {
    id: 11,
    title: "The Green Mile",
    genre: "Drama",
    rating: 8.6,
    year: 1999,
    runtime: 189,
    watched: false,
  },
  {
    id: 12,
    title: "Se7en",
    genre: "Thriller",
    rating: 8.6,
    year: 1995,
    runtime: 127,
    watched: true,
  },
  {
    id: 13,
    title: "The Prestige",
    genre: "Mystery",
    rating: 8.5,
    year: 2006,
    runtime: 130,
    watched: false,
  },
  {
    id: 14,
    title: "The Departed",
    genre: "Crime",
    rating: 8.5,
    year: 2006,
    runtime: 151,
    watched: true,
  },
  {
    id: 15,
    title: "Gladiator",
    genre: "Action",
    rating: 8.5,
    year: 2000,
    runtime: 155,
    watched: false,
  },
  {
    id: 16,
    title: "The Usual Suspects",
    genre: "Mystery",
    rating: 8.5,
    year: 1995,
    runtime: 106,
    watched: false,
  },
  {
    id: 17,
    title: "Memento",
    genre: "Mystery",
    rating: 8.4,
    year: 2000,
    runtime: 113,
    watched: true,
  },
  {
    id: 18,
    title: "The Lion King",
    genre: "Animation",
    rating: 8.5,
    year: 1994,
    runtime: 88,
    watched: true,
  },
  {
    id: 19,
    title: "Apocalypse Now",
    genre: "War",
    rating: 8.4,
    year: 1979,
    runtime: 147,
    watched: false,
  },
  {
    id: 20,
    title: "Alien",
    genre: "Sci-Fi",
    rating: 8.4,
    year: 1979,
    runtime: 117,
    watched: true,
  },
  {
    id: 21,
    title: "The Shining",
    genre: "Horror",
    rating: 8.4,
    year: 1980,
    runtime: 146,
    watched: false,
  },
  {
    id: 22,
    title: "Spirited Away",
    genre: "Animation",
    rating: 8.6,
    year: 2001,
    runtime: 125,
    watched: false,
  },
  {
    id: 23,
    title: "Coco",
    genre: "Animation",
    rating: 8.4,
    year: 2017,
    runtime: 105,
    watched: true,
  },
  {
    id: 24,
    title: "The Pianist",
    genre: "Drama",
    rating: 8.5,
    year: 2002,
    runtime: 150,
    watched: false,
  },
  {
    id: 25,
    title: "American History X",
    genre: "Drama",
    rating: 8.5,
    year: 1998,
    runtime: 119,
    watched: false,
  },
  {
    id: 26,
    title: "Joker",
    genre: "Thriller",
    rating: 8.4,
    year: 2019,
    runtime: 122,
    watched: true,
  },
  {
    id: 27,
    title: "Whiplash",
    genre: "Drama",
    rating: 8.5,
    year: 2014,
    runtime: 106,
    watched: false,
  },
  {
    id: 28,
    title: "Parasite",
    genre: "Thriller",
    rating: 8.6,
    year: 2019,
    runtime: 132,
    watched: false,
  },
  {
    id: 29,
    title: "1917",
    genre: "War",
    rating: 8.3,
    year: 2019,
    runtime: 119,
    watched: false,
  },
  {
    id: 30,
    title: "The Avengers",
    genre: "Action",
    rating: 8.0,
    year: 2012,
    runtime: 143,
    watched: true,
  },
];

// ========================================
// FEATURE 1: Get Unwatched Movies
// ========================================
// Return an array of movies you haven't watched yet
// Expected: array of movie objects where watched = false

function getUnwatchedMovies() {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Basic filtering
// Use: filter() with a simple boolean property check
// Real-world: "Show me unread emails", "Show incomplete tasks"

// console.log('Unwatched Movies:', getUnwatchedMovies());
// console.log('---\n');

// ========================================
// FEATURE 2: Get Highly Rated Movies
// ========================================
// Return movies with rating of 8.5 or higher
// Expected: array of movie objects

function getHighlyRatedMovies() {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Filtering by numeric threshold
// Use: filter() with comparison operator
// Real-world: "Products over $100", "Users with 1000+ followers"

// console.log('Highly Rated (8.5+):', getHighlyRatedMovies());
// console.log('---\n');

// ========================================
// FEATURE 3: Get Movie Titles Only
// ========================================
// Return an array of just the movie titles (strings)
// Expected: ['The Shawshank Redemption', 'The Dark Knight', ...]

function getMovieTitles() {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Extracting single property
// Use: map() to transform objects into single values
// Real-world: "Get all user emails", "Extract product IDs"

// console.log('All Movie Titles:', getMovieTitles());
// console.log('---\n');

// ========================================
// FEATURE 4: Get Movies by Genre
// ========================================
// Return movies that match a specific genre
// Expected: function takes a genre parameter

function getMoviesByGenre(genre) {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Filtering with parameter
// Use: filter() with dynamic value
// Real-world: "Filter by category", "Search by tag"

// console.log('Sci-Fi Movies:', getMoviesByGenre('Sci-Fi'));
// console.log('Crime Movies:', getMoviesByGenre('Crime'));
// console.log('---\n');

// ========================================
// FEATURE 5: Calculate Average Rating
// ========================================
// Return the average rating of all movies
// Expected: single number (e.g., 8.52)

function getAverageRating() {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Calculating average
// Use: reduce() to sum, then divide by length
// Real-world: "Average order value", "Mean test score"

// console.log('Average Rating:', getAverageRating());
// console.log('---\n');

// ========================================
// FEATURE 6: Calculate Total Watch Time
// ========================================
// Return total runtime of all WATCHED movies in hours
// Expected: single number (hours with decimals, e.g., 23.5)
// Hint: runtime is in minutes, convert to hours

function getTotalWatchTime() {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Filter then reduce
// Use: Chain filter() to get subset, then reduce() to sum
// Real-world: "Total spent on completed orders", "Hours logged on finished projects"
// BONUS: Converting units (minutes to hours)

// console.log('Total Watch Time (hours):', getTotalWatchTime());
// console.log('---\n');

// ========================================
// FEATURE 7: Find Movie by Title
// ========================================
// Find and return a movie by its exact title
// Expected: single movie object or undefined

function findMovieByTitle(title) {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Finding specific item
// Use: find() to locate by property match
// Real-world: "Find user by username", "Get product by ID"

// console.log('Find "Inception":', findMovieByTitle('Inception'));
// console.log('Find "Avatar":', findMovieByTitle('Avatar'));
// console.log('---\n');

// ========================================
// FEATURE 8: Get Top Rated Movies
// ========================================
// Return the top N highest-rated movies
// Expected: function takes a number parameter
// Hint: Sort descending, then take first N

function getTopRatedMovies(count) {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Sort then slice
// Use: sort() by rating descending, slice() to get top N
// Real-world: "Top 10 products", "Leaderboard", "Best sellers"

// console.log('Top 5 Movies:', getTopRatedMovies(5));
// console.log('---\n');

// ========================================
// FEATURE 9: Group Movies by Genre
// ========================================
// Return an object where keys are genres and values are arrays of movie titles
// Expected: { Drama: ['Shawshank...', 'Forrest Gump'], Action: [...], ... }

function groupMoviesByGenre() {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Grouping data
// Use: reduce() to build object with arrays
// Real-world: "Group orders by status", "Organize tasks by priority"
// This is one of THE most common patterns in real development!

// console.log('Movies by Genre:', groupMoviesByGenre());
// console.log('---\n');

// ========================================
// FEATURE 10: Count Movies by Genre
// ========================================
// Return an object showing how many movies in each genre
// Expected: { Drama: 6, Action: 3, Sci-Fi: 4, ... }

function countMoviesByGenre() {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Frequency count
// Use: reduce() with increment pattern
// Real-world: "Count items by category", "Analytics dashboards"

// console.log('Genre Counts:', countMoviesByGenre());
// console.log('---\n');

// ========================================
// FEATURE 11: Get Watchlist Stats
// ========================================
// Return an object with useful statistics:
// {
//   total: number of movies,
//   watched: number watched,
//   unwatched: number unwatched,
//   averageRating: average rating,
//   totalRuntime: total runtime in hours
// }

function getWatchlistStats() {
  // YOUR CODE HERE
  const result = {
    total: null,
    watched: null,
    unwatched: null,
    averageRating: null,
    totalRuntime: null,
  };

  return result;
}

// PATTERN: Multiple calculations
// Use: Combine multiple array methods
// Real-world: Dashboard summaries, analytics reports
// Hint: You can reuse functions you already wrote!

// console.log('Watchlist Stats:', getWatchlistStats());
// console.log('---\n');

// ========================================
// FEATURE 12: Get Recommendations
// ========================================
// Recommend unwatched movies based on:
// - Same genre as highly-rated watched movies (rating >= 8.5)
// - Sort recommendations by rating (highest first)
// - Return top 3
// Expected: array of 3 movie objects

function getRecommendations() {
  // YOUR CODE HERE
  const result = null;

  return result;
}

// PATTERN: Complex multi-step filtering
// Use: Multiple filters, map, includes, sort, slice
// Real-world: Recommendation engines, "You might also like..."
// This combines everything you've learned!

// Hint breakdown:
// 1. Find watched movies with rating >= 8.5
// 2. Get their genres (might have duplicates, that's ok)
// 3. Find unwatched movies that match those genres
// 4. Sort by rating descending
// 5. Take top 3

// console.log('Recommendations:', getRecommendations());
// console.log('---\n');

// ========================================
// UNCOMMENT TO TEST YOUR FUNCTIONS
// ========================================
// Uncomment each section as you complete the features!

console.log("✅ Uncomment function calls to test your code!");
console.log("💡 Work through features 1-12 in order");
console.log("🎯 Each feature teaches an important real-world pattern\n");
