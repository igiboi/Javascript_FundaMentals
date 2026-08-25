export default function BudgetInput({ budget, setBudget }) {
  return (
    <div>
      <label>
        Monthly Budget
        <input
          type='number'
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </label>
    </div>
  );
}
