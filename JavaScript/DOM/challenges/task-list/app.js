const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

/*
We attach a 'click' event listener to addBtn. When clicked, 
we push input.value into the tasks array, then call render() 
to update the DOM. 
*/
addBtn.addEventListener('click', () => {
  tasks.push(input.value);
  render();
});

/*
Created a function render to update the DOM to render the list of task
using map method to iterate over each task in the tasks array
 and turn that task into a li tag and using join method to 
 convert into a single string

we then set tasklist.innerHTML to equal the result of variable listofTask
*/
function render() {
  const listOfTask = tasks
    .map((task, index) =>
      `<li class="list" data-index="${index}">${task}
      <button class="delete-btn" data-index="${index}">Delete</button>
      </li>`)
    .join("");

  taskList.innerHTML = listOfTask;
}


/* 
We attach the listener to taskList because the delete buttons 
are dynamically generated they don't exist in the DOM when 
the page loads. When a delete button is clicked, the event bubbles up
to taskList. Inside the callback, we use event.target to check 
which element was actually clicked, and 
classList.contains('delete-btn') to confirm it was a delete button
before acting.

Once inside If statement we created a variable buttonIndex
buttonIndex grabs the event.target.dataset.index
WWe reassign tasks to the result of .filter()
to filter through the tasks array 
inside the filter() callback we use the parameter "index" inside 
the callback to use the index and compare it to the buttonIndex
If the Index does not match ButtonIndex we keep else we remove it 
from the tasks array
which is wrapped in Number function to turn the string into number
since buttonIndex is type of string.
*/
taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const buttonIndex = event.target.dataset.index;
    tasks = tasks.filter((_, index) => index !== Number(buttonIndex));
    render();
  }

  if (event.target.classList.contains('list')) {
    event.target.classList.toggle("completed");
  }
});

/*
we attach a listener to clear button to reassign the tasks variable 
an empty array since it is let and added guard clause early
if the tasks array is already empty do nothing 
*/
clearBtn.addEventListener('click', () => {
  if (tasks.length === 0) return;
  tasks = [];
  render();
});