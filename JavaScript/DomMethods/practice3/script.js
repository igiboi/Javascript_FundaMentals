const taskInput = document.getElementById('task-input');
const btnAdd = document.getElementById('btn-add');
const list = document.getElementById('list');

btnAdd.addEventListener('click', () => {
  // checks for empty spaces
  if (taskInput.value.trim() === "") return;

  const span = document.createElement("span");
  span.textContent = taskInput.value;
  const li = document.createElement('li');
  li.appendChild(span);
  taskInput.value = '';

  const btnDone = document.createElement('button');
  const btnDelete = document.createElement('button');
  btnDone.textContent = "Done";
  btnDelete.textContent = "Delete";
  li.appendChild(btnDelete);
  li.appendChild(btnDone);

  btnDone.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  btnDelete.addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li);
});