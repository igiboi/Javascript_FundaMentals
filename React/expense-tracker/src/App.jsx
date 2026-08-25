import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import BudgetInput from "./components/BudgetInput";

function App() {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [budget, setBudget] = useState("");

  function handleAddExpense() {
    if (description === '' || Number(amount) <= 0) {
      setError("Please enter a description and an amount greater than 0.")
      return;
    }
    setError(null);
 
    const newExpense = {
      id: crypto.randomUUID(),
      description: description,
      amount: Number(amount),
    };
    
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setDescription("");
    setAmount("");
  }

  function handleDeleteExpense(id) {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  }
  
  function handleStartEdit(expense) {
    setEditingId(expense.id);
    setEditText(expense.description);
  }

  function handleSaveEdit() {
    setExpenses((prevExpenses) => prevExpenses.map((expense) =>
      expense.id === editingId ? ({ ...expense, description: editText}) : expense
    ))

    setEditingId(null);
    setEditText("");
  }

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const remaining = Number(budget) - total;
  
  return (
    <div>
      <h1>Expense Tracker</h1>
      <BudgetInput budget={budget} setBudget={setBudget} />
      <ExpenseForm
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        error={error}
        handleAddExpense={handleAddExpense}
      />
      <ExpenseList
        expenses={expenses}
        editingId={editingId}
        editText={editText}
        setEditText={setEditText}
        handleStartEdit={handleStartEdit}
        handleSaveEdit={handleSaveEdit}
        handleDeleteExpense={handleDeleteExpense}
      />
      <h2>Total: ${total}</h2>
      {budget && <h2>Remaining: ${remaining}</h2>}
    </div>
  );
}

export default App;
