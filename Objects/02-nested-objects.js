// ============================================
// NESTED OBJECTS & COMPLEX STRUCTURES
// ============================================

// Note: This file is meant to be run independently
// Variables here won't conflict with other tutorial files when running separately

// ============================================
// WHY NESTED OBJECTS MATTER - THE BIGGER PICTURE
// ============================================

// In real applications, you'll constantly work with nested objects
// Almost ALL real-world data is nested - not flat!

// WHY?
// 1. Real data is complex - users have addresses, orders have items, posts have comments
// 2. APIs organize data hierarchically - easier to understand and maintain
// 3. Databases store related data together - one user object contains everything about them

// REAL-WORLD EXAMPLES YOU'LL ENCOUNTER DAILY:
// - Every API response from servers (Twitter, GitHub, weather apps, etc.)
// - Redux/state management (app.user.settings.theme)
// - React component props (props.data.user.profile.avatar)
// - Configuration files (database.production.host)
// - E-commerce data (order.shipping.address.city)

// If you master nested objects, you can work with ANY API in the world!

// ============================================
// 1. BASIC NESTED OBJECTS
// ============================================

// CONCEPT: Objects inside objects (like folders inside folders)
// WHY IT'S IMPORTANT: Real data is organized hierarchically
// REAL-WORLD USE: User profiles, app settings, product details

// Think of it like organizing files:
// user/
//   ├── profile/
//   │   ├── firstName
//   │   └── lastName
//   └── settings/
//       └── notifications/
//           ├── email
//           └── push

const user = {
  id: 12345,
  username: "coder_pro",
  profile: {
    firstName: "Alex",
    lastName: "Johnson",
    bio: "Full stack developer"
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      push: false,
      sms: true
    }
  }
};

console.log("--- Accessing Nested Properties ---");
console.log("First name:", user.profile.firstName);
console.log("Email notifications:", user.settings.notifications.email);

// Using bracket notation
console.log("Theme:", user["settings"]["theme"]);

// ============================================
// CHALLENGE 1: Basic Nested Objects
// ============================================
console.log("\n--- Challenge 1: Basic Nested ---");
// TODO: Create a 'school' object with:
//   - name
//   - address (nested object with: street, city, state, zip)
//   - principal (nested object with: name, email)
// Access and print the city and principal's name


// ============================================
// 2. ARRAYS IN OBJECTS
// ============================================

// CONCEPT: Objects can contain arrays of other objects
// WHY IT'S IMPORTANT: Most data has "collections" - playlists have songs, orders have items
// REAL-WORLD USE: Shopping carts, playlists, user posts, order history

// This is how you represent:
// - A playlist with multiple songs
// - A shopping cart with multiple products
// - A user with multiple posts
// - A blog with multiple comments

console.log("\n--- Arrays in Objects ---");

const playlist = {
  name: "Workout Mix",
  creator: "DJ Luigi",
  songs: [
    { title: "Song 1", artist: "Artist A", duration: 180 },
    { title: "Song 2", artist: "Artist B", duration: 210 },
    { title: "Song 3", artist: "Artist C", duration: 195 }
  ]
};

console.log("First song:", playlist.songs[0].title);
console.log("Second song artist:", playlist.songs[1].artist);

// Loop through songs
playlist.songs.forEach(song => {
  console.log(`${song.title} by ${song.artist} (${song.duration}s)`);
});

// WHY ARRAYS IN OBJECTS?
// Real entities have COLLECTIONS of things:
// - A user has multiple posts
// - A shopping cart has multiple items
// - An order has multiple products
// - A playlist has multiple songs

// This is how you represent "one-to-many" relationships in JavaScript!

// ============================================
// CHALLENGE 2: Arrays in Objects
// ============================================
console.log("\n--- Challenge 2: Arrays in Objects ---");
// TODO: Create a 'team' object with:
//   - name
//   - sport
//   - players (array of objects, each with: name, position, number)
// Add at least 3 players
// Loop through and print each player's info
 
const team = {
  name: "Los Angeles Lakers",
  sport: "Basketball",
  players: [
    { name: "LeBron James", position: "Forward", number: 23 },
    { name: "Anthony Davis", position: "Center", number: 3 },
    { name: "D'Angelo Russell", position: "Guard", number: 1 },
    { name: "Austin Reaves", position: "Guard", number: 15 },
  ],
};

//loop through object
team.players.forEach(player => {
    console.log(`${player.name} + ${player.position} + ${player.number}`);
})

// ============================================
// 3. REAL-WORLD API EXAMPLE
// ============================================

// CONCEPT: This is EXACTLY what real APIs return
// WHY IT'S IMPORTANT: You'll work with data like this EVERY DAY as a developer
// REAL-WORLD USE: Every fetch() call, every API integration

// When you call:
// fetch('https://api.example.com/user/789')
// You get back deeply nested JSON that looks like this:

// This is what you get from a typical API call
const apiResponse = {
  status: "success",
  data: {
    user: {
      id: 789,
      name: "Sarah Chen",
      email: "sarah@example.com",
      address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA",
        zipCode: "94102",
        coordinates: {
          lat: 37.7749,
          lng: -122.4194
        }
      },
      orders: [
        {
          id: "ORD001",
          date: "2024-01-15",
          total: 89.99,
          items: [
            { name: "Laptop Mouse", quantity: 1, price: 29.99 },
            { name: "USB Cable", quantity: 2, price: 30.00 }
          ]
        },
        {
          id: "ORD002",
          date: "2024-02-01",
          total: 149.99,
          items: [
            { name: "Keyboard", quantity: 1, price: 149.99 }
          ]
        }
      ]
    }
  },
  timestamp: "2024-03-20T10:30:00Z"
};

console.log("\n--- Working with API Data ---");
console.log("User name:", apiResponse.data.user.name);
console.log("City:", apiResponse.data.user.address.city);
console.log("Latitude:", apiResponse.data.user.address.coordinates.lat);
console.log("First order ID:", apiResponse.data.user.orders[0].id);
console.log("First item in first order:", apiResponse.data.user.orders[0].items[0].name);

// READING NESTED API DATA:
// Think of it like drilling down through folders:
// apiResponse → data → user → orders → [0] → items → [0] → name
//
// Break it down step by step:
// 1. apiResponse.data → get the 'data' object
// 2. .user → get the 'user' inside data
// 3. .orders → get the 'orders' array
// 4. [0] → get the first order
// 5. .items → get the items array from that order
// 6. [0] → get the first item
// 7. .name → get the name of that item

// EVERY API you work with will look like this!
// Twitter API, GitHub API, Weather API - all nested structures

// ============================================
// CHALLENGE 3: API Data
// ============================================
console.log("\n--- Challenge 3: API Data ---");
// TODO: Using the apiResponse above:
// 1. Get the quantity of the first item in the second order
// 2. Get the user's longitude coordinate
// 3. Calculate the total number of items across ALL orders (use reduce or a loop)


// ============================================
// 4. OPTIONAL CHAINING (?.) - MODERN JS
// ============================================

// CONCEPT: Safely access nested properties that might not exist
// WHY IT'S IMPORTANT: Prevents crashes! APIs often return incomplete data
// REAL-WORLD USE: Every API call where data might be missing

// THE PROBLEM:
// APIs don't always return complete data:
// - User might not have filled out their address
// - Product might not have reviews yet
// - Order might not have tracking info
// Without optional chaining, your app CRASHES!

// Problem: What if a property doesn't exist?
const userData = {
  name: "John",
  // No address property!
};

// This would crash your app:
// console.log(userData.address.city);  // ERROR!

// Old way to prevent crashes:
console.log("\n--- Safe Property Access (Old Way) ---");
const city = userData.address && userData.address.city;
console.log("City:", city);  // undefined

// Modern way with optional chaining:
console.log("\n--- Optional Chaining (Modern Way) ---");
console.log("City:", userData.address?.city);  // undefined (no error!)
console.log("Zip:", userData.address?.zipCode);  // undefined

// THE MAGIC: If 'address' doesn't exist, it stops there and returns undefined
// Instead of crashing with "Cannot read property 'city' of undefined"

// Real example:
const product = {
  name: "Laptop",
  specs: {
    cpu: "Intel i7"
    // No gpu property
  }
};

console.log("GPU:", product.specs?.gpu);  // undefined
console.log("RAM:", product.specs?.ram?.size);  // undefined (double chain)

// CHAINING WORKS AT EVERY LEVEL:
// product.specs?.ram?.size
//               ↑        ↑
//         checks here  checks here too
// If 'ram' doesn't exist, stops and returns undefined

// Works with arrays too!
const posts = {
  data: []
};
console.log("First post:", posts.data?.[0]?.title);  // undefined

// REAL-WORLD EXAMPLE:
// API sometimes doesn't return 'shipping' if order isn't shipped yet
const order = {
  id: "ORD123",
  items: [{ name: "Book", price: 15 }]
  // No 'shipping' property yet!
};

// Without optional chaining → CRASH:
// console.log(order.shipping.trackingNumber); // ERROR!

// With optional chaining → SAFE:
console.log("Tracking:", order.shipping?.trackingNumber);  // undefined (no crash!)

// ============================================
// CHALLENGE 4: Optional Chaining
// ============================================
console.log("\n--- Challenge 4: Optional Chaining ---");
// TODO: Create a user object that has missing nested properties
// Use optional chaining to safely access 3 levels deep
// Try accessing both existing and non-existing properties


// ============================================
// 5. MODIFYING NESTED OBJECTS
// ============================================

// CONCEPT: Updating values deep inside objects
// WHY IT'S IMPORTANT: Apps need to update data dynamically
// REAL-WORLD USE: Update cart quantities, change user settings, modify game state

// Examples:
// - User changes their email → user.profile.email = "new@email.com"
// - Player picks up item → player.inventory.items.push("shield")
// - Shopping cart quantity changes → cart.items[0].quantity = 5

console.log("\n--- Modifying Nested Data ---");

const gameState = {
  player: {
    name: "Hero",
    health: 100,
    inventory: {
      gold: 50,
      items: ["sword", "potion"]
    }
  }
};

// Update nested property
gameState.player.health = 85;
console.log("Health:", gameState.player.health);

// Add to nested array
gameState.player.inventory.items.push("shield");
console.log("Items:", gameState.player.inventory.items);

// Add new nested property
gameState.player.inventory.weapons = ["sword", "bow"];
gameState.player.level = 5;
console.log("Game state:", gameState);

// ============================================
// CHALLENGE 5: Modifying Nested Objects
// ============================================
console.log("\n--- Challenge 5: Modifying Nested ---");
// TODO: Create a 'store' object with:
//   - name
//   - inventory (object with product names as keys and quantities as values)
//   - sales (array of sale objects with: date, amount, items sold)
// Add a new product to inventory
// Add a new sale to the sales array
// Update a product quantity


// ============================================
// 6. DESTRUCTURING NESTED OBJECTS
// ============================================

// CONCEPT: Extract values from deep inside nested objects cleanly
// WHY IT'S IMPORTANT: Cleaner code, less repetition
// REAL-WORLD USE: React components, API data extraction, function parameters

// OLD WAY (repetitive):
// const city = restaurant.location.city;
// const state = restaurant.location.state;
// const pizzas = restaurant.menu.pizza;

// NEW WAY (clean):
// const { location: { city, state }, menu: { pizza } } = restaurant;

console.log("\n--- Destructuring Nested Objects ---");

const restaurant = {
  name: "Pizza Palace",
  location: {
    city: "Chicago",
    state: "IL",
    zipCode: "60601"
  },
  menu: {
    pizza: ["Margherita", "Pepperoni"],
    drinks: ["Coke", "Sprite"]
  }
};

// Basic destructuring
const { name, location } = restaurant;
console.log("Name:", name);
console.log("Location:", location);

// Nested destructuring
{
  const {
    location: { city, state },
    menu: { pizza }
  } = restaurant;

  console.log("City:", city);
  console.log("State:", state);
  console.log("Pizzas:", pizza);
}

// ============================================
// CHALLENGE 6: Destructuring Nested
// ============================================
console.log("\n--- Challenge 6: Destructuring ---");
// TODO: Create a complex nested object representing a book
// It should have: title, author (with firstName and lastName), publisher (with name and location)
// Use nested destructuring to extract: title, author's lastName, and publisher's location


// ============================================
// 7. REAL-WORLD: SHOPPING CART
// ============================================

console.log("\n--- Real World: Shopping Cart ---");

const shoppingCart = {
  user: "luigi_dev",
  items: [
    { id: 1, name: "Laptop", price: 999, quantity: 1 },
    { id: 2, name: "Mouse", price: 29.99, quantity: 2 },
    { id: 3, name: "Keyboard", price: 79.99, quantity: 1 }
  ],

  // Calculate total
  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  // Add item
  addItem(id, name, price, quantity = 1) {
    this.items.push({ id, name, price, quantity });
  },

  // Remove item
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  },

  // Update quantity
  updateQuantity(id, newQuantity) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.quantity = newQuantity;
    }
  }
};

console.log("Cart total:", shoppingCart.getTotal());
shoppingCart.addItem(4, "Monitor", 299.99);
console.log("After adding monitor:", shoppingCart.items);
shoppingCart.updateQuantity(2, 3);
console.log("After updating mouse quantity:", shoppingCart.items);
console.log("New total:", shoppingCart.getTotal());

// ============================================
// CHALLENGE 7: Shopping Cart Methods
// ============================================
console.log("\n--- Challenge 7: Shopping Cart ---");
// TODO: Add these methods to a shopping cart object:
//   - getItemCount() - returns total number of items (sum of all quantities)
//   - findItem(name) - returns the item object with that name
//   - clearCart() - removes all items
// Test each method


// ============================================
// REAL-WORLD EXAMPLE: Blog Post Data
// ============================================

const blogPost = {
  id: "post-123",
  title: "Understanding JavaScript Objects",
  author: {
    id: "auth-456",
    name: "Jane Developer",
    avatar: "https://example.com/avatar.jpg",
    social: {
      twitter: "@jane_dev",
      github: "janedev"
    }
  },
  content: {
    body: "This is a great article about JavaScript...",
    wordCount: 1500,
    readingTime: 7  // minutes
  },
  metadata: {
    publishedAt: "2024-03-15",
    updatedAt: "2024-03-18",
    tags: ["javascript", "tutorial", "objects"],
    stats: {
      views: 5420,
      likes: 312,
      comments: 45
    }
  }
};

console.log("\n--- Blog Post Example ---");
console.log("Title:", blogPost.title);
console.log("Author:", blogPost.author.name);
console.log("Twitter:", blogPost.author.social.twitter);
console.log("Views:", blogPost.metadata.stats.views);
console.log("Tags:", blogPost.metadata.tags.join(", "));

// ============================================
// FINAL CHALLENGE: Complex Nested Structure
// ============================================
console.log("\n--- FINAL CHALLENGE ---");
// TODO: Create a 'university' object with:
//   - name
//   - departments (array of objects, each with: name, head, courses)
//   - each course should be an object with: code, title, credits, instructor
// Create at least 2 departments with 2 courses each
// Write code to:
//   1. Find all courses with more than 3 credits
//   2. List all instructors (no duplicates)
//   3. Calculate total credits across all courses
//   4. Find a specific course by its code
