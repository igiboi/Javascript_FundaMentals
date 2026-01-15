function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private - can't access from outside

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      return "Invalid amount";
    },

    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Invalid withdrawal";
    },

    getBalance() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.deposit(5000));
console.log(myAccount.withdraw(200));
console.log(myAccount.getBalance());
