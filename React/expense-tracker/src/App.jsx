import { useState } from "react";

function App() {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

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
  
  return (
    <div>
      <h1>Expense Tracker</h1>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
      {/* error is null → falsy → returns null immediately, never looks at the <p>
      error is a string → truthy → returns the right side, the <p> */}
      {error && <p>{error}</p>}
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {editingId === expense.id ? (
              <>{/* edit mode */}
                <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {/* view mode */}
                  {expense.description}: ${expense.amount} {/* Coffee: 5 */}
                  <button onClick={() => handleStartEdit(expense)}>Edit</button>
                  <button onClick={() => handleDeleteExpense(expense.id)}>
                    Delete
                  </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
    </div>
  );
}

export default App;
