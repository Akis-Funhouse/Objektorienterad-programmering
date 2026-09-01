import BankAccount from "./bank-account.js"

const account1 = new BankAccount("Alice", 500);

account1.deposit(200);
account1.withdraw(100);

account1.holder = "Charlie";
// account1.balance = 10000;

account1.showInfo();