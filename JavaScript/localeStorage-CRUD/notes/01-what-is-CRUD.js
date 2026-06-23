/* CONCEPT: CRUD - The four basic operations of persistent storage

WHAT: CRUD stands for Create, Read, Update, and Delete.

 WHY: forms the foundation for working with databases and building applications
  where users can add, view, modify, and delete data.

 THE FOUR OPERATIONS:
 C - Create refers to the process of creating new data.
  Ex. in a web app, when a user adds a new post to a blog.

 R - Read is operation where data is retrived from a database.
  Ex. when you visit a blog post or view a profile in website you're
  performing a read operation to fetch and display data store in the database

 U - Update modifying existing data in the database.
  Ex. editing a blog post or updating your profile information.

 D - Delete is the operation that removes data from database.
  Ex. when you delete a blog post or account.

CRUD connects three layers: the UI (what users see), 
the API (the bridge), and the database (where data lives).

This means CRUD shows up everywehre in web development. Whether you're 
saving data, displaying it, or sending it over the network, you're doing some
form of Create, Read, Update, or Delete. 

HTTP stands for Hypertext Transfer Protocol and it is the foundation for data 
communication on the web. There are HTTP methods which define the actions that 
can be performed on resources over the web. 
The common methods are GET, POST, PUT, PATCH, DELETE.

POST is used to create a new resource.

GET is used to retrieve or read data.

PUT is used to update a resource by replacing it entirely.

PATCH is used to partially update a resource.

DELETE is used to remove a resource.

*/

// EXAMPLE (recreate the array example from memory — don't copy it):

let items = [];

// Create
function createItem(item) {
  items.push(item);
}

// Read
function readItems() {
  return items;
}

// Update 
function updateItem(index, newItem) {
  items[index] = newItem;
}

// Delete
function deleteItem(index) {
  items.splice(index, 1);
}

// Example Usage
createItem('Book');
console.log(readItems()); // ['Book']
updateItem(0, 'Magazine');
console.log(readItems()); // ['Magazine']
deleteItem(0);
console.log(readItems());