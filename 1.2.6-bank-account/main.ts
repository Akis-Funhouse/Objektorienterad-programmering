import BankAccount from "./bank-account.js"

const account1 = new BankAccount("Alice", 500);
const account2 = new BankAccount("Peter", 1000);

account1.deposit(200);
account1.deposit(100);
account1.deposit(-100);

account1.withdraw(100);
account1.withdraw(300);
account1.withdraw(500);

account1.showInfo();

const currentBalance = account1.getBalance();
console.log("Din saldo:", currentBalance);

//

account2.deposit(400);
account2.deposit(200);

account2.withdraw(500);
account2.withdraw(200);
account2.withdraw(-200);
account2.withdraw(1000);

account2.showInfo();