const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const li = document.createElement("li");

  li.textContent = taskInput.value;
  taskList.appendChild(li);
});