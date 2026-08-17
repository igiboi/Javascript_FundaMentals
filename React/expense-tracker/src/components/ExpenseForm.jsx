export default function ExpenseForm({ description, setDescription,
  amount, setAmount, error, handleAddExpense }) {
  
  return (
    <>
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
    </>
  );
}
