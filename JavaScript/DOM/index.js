// DOM Practice

// // Select the existing div#container element from the DOM
// const container = document.getElementById('container');

// // Create a new <p> element in memory (not on the page yet)
// const p = document.createElement('p');

// // Set the text that the <p> element will display
// p.textContent = 'Hello from the DOM';

// // Attach the <p> element to the container, making it appear on the page
// container.appendChild(p);
const container = document.getElementById("container");

const h2 = document.createElement("h2");
h2.textContent = "My Favourite Foods";
container.appendChild(h2);

const ul = document.createElement("ul");
ul.id = "fruits";

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

li1.textContent = "Blueberry";
li2.textContent = "Strawberry";
li3.textContent = "Apple";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

container.appendChild(ul);

const firstItem = document.querySelector("#fruits li:first-of-type");
ul.removeChild(firstItem);


// fetch the element
const btn = document.getElementById("btn");

btn.addEventListener('click', (event) => {
  console.log(event.target);
});

