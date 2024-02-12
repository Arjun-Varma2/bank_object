class Bank {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }
    this.balance -= amount;
  }

  checkBalance() {
    return this.balance;
  }
}

module.exports = Bank;
