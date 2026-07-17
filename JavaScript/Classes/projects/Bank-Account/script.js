// Build a Bank Account Management Program
// Run with:  node script.js

// Data
class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // METHODS:
  deposit(amount) {
    if (amount <= 0) return "Deposit amount must be greater than zero.";

    this.transactions.push({ type: "deposit", amount: amount });

    this.balance += amount;

    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance)
      return "Insufficient balance or invalid amount.";

    this.transactions.push({ type: "withdraw", amount: amount });

    this.balance -= amount;

    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }
  listAllDeposits() {
    const deposit = this.transactions
      .filter((transaction) => transaction.type === "deposit")
      .map((transaction) => transaction.amount)
      .join(",");

    return `Deposits: ${deposit}`;
  }
  listAllWithdrawals() {
    const deposit = this.transactions
      .filter((transaction) => transaction.type === "withdraw")
      .map((transaction) => transaction.amount)
      .join(",");

    return `Withdrawals: ${deposit}`;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(200);
myAccount.deposit(150);
myAccount.withdraw(50);
myAccount.withdraw(30);
myAccount.withdraw(20);

