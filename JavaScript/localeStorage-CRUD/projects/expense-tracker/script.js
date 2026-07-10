const expenseForm = document.getElementById("expense-form");
const titleInput = document.getElementById("title-input");
const categoryInput = document.getElementById("category-input");
const amountInput = document.getElementById("amount-input");
const expensesContainer = document.getElementById("expenses-container");
const totalEl = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let editId = null;

const renderExpenses = () => {
  // wipe the screen, so we don't get duplicates
  expensesContainer.innerHTML = "";

  // loops through the expenses object 
  expenses.forEach(({ id, title, category, amount }) => {
    expensesContainer.innerHTML += `
      <div class="expense" id="${id}">
        <span>${title} — ${category} — $${amount}</span>
        <button onclick="editExpense(this)">Edit</button>
        <button onclick="deleteExpense(this)">Delete</button>
      </div>
    `;
  });

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalEl.textContent = total.toFixed(2);
};

const addOrUpdateExpense = () => {
  const expense = {
    id: editId ?? Date.now(), // reuse id if editing, new id if creating
    title: titleInput.value,
    category: categoryInput.value,
    amount: Number(amountInput.value),
  };

  if (editId === null) {
    // CREATE: add new
    expenses.push(expense);
  } else {
    // UPDATE: overwrite existing

    // find that id first
    const index = expenses.findIndex((item) => item.id === editId);

    // overwrites the old expense at index with updated on
    expenses[index] = expense;
  }

  localStorage.setItem("expenses", JSON.stringify(expenses));

  editId = null;
  titleInput.value = "";
  categoryInput.value = "";
  amountInput.value = "";
};

const deleteExpense = (buttonEl) => {
  const index = expenses.findIndex((expense) =>
    expense.id === Number(buttonEl.parentElement.id));
  
  expenses.splice(index, 1); 
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();
}

const editExpense = (buttonEl) => {
  const index = expenses.findIndex((expense) =>
    expense.id === Number(buttonEl.parentElement.id));
  
  // grab the item 
  const expense = expenses[index]; // gives you the object to read from

  titleInput.value = expense.title;
  categoryInput.value = expense.category;
  amountInput.value = expense.amount;
  
  editId = expense.id;
}

expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addOrUpdateExpense()
  renderExpenses()
})

renderExpenses();