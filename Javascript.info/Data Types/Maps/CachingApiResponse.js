// Objective:
// Implement a simple caching mechanism using a Map. This is a practical example of how Maps can be used in real-world applications to avoid redundant API calls.

// Instructions:

// Create a function fetchData(url) that simulates fetching data from an API.
// Use a Map named cache to store the results of API calls. The key is the URL and the value is the fetched data.
// Before "fetching" new data, check if the data for that URL is already in the cache.
// If it is, return the cached data. If not, simulate an API call (e.g., using a timeout or returning a dummy value) and then store the result in the cache.

const cache = new Map();

function fetchData(url) {
  // Check if data is already in the cache
  if (cache.has(url)) {
    console.log(`Fetching data for "${url}" from cache.`);
    return Promise.resolve(cache.get(url));
  }

  console.log(`Fetching data for "${url}" from API...`);
  // Simulate an API call with a Promise (here we'll just resolve with a dummy value)
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `Data from ${url}`;
      // Store the data in the cache
      cache.set(url, data);
      resolve(data);
    }, 1000); // Simulate a delay
  });
}

// Example usage:
fetchData('https://api.example.com/data')
  .then(console.log)
  .then(() => fetchData('https://api.example.com/data'))
  .then(console.log);
