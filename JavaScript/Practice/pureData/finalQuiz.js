const transactions = [
  { type: "credit", amount: 500 },
  { type: "debit", amount: 200 },
  { type: "credit", amount: 300 },
  { type: "debit", amount: 150 },
  { type: "credit", amount: 100 },
];


function getNetBalance(transactions) {
  return transactions.reduce((acc, curr) => {
    if (curr.type === "credit") return acc + curr.amount;
    if (curr.type === "debit") return acc - curr.amount;
    return acc;
  }, 0);
}


console.log(getNetBalance(transactions));