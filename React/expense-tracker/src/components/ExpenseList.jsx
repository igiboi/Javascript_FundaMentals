export default function ExpenseList(
  { expenses, editingId, editText,
    setEditText, handleStartEdit, handleSaveEdit, handleDeleteExpense }) {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {editingId === expense.id ? (
            <>
              {/* edit mode */}
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
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
  );
}