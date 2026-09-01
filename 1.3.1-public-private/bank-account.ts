export default class BankAccount {
            holder: string;
    private balance: number;

    constructor(accountHolder: string, accountBalance: number) {
        this.holder = accountHolder;
        this.balance = accountBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Beloppet du sätter in måste vara större än noll.")
        }
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Beloppet du tar ut måste vara större än noll.")
        } else if (amount > this.balance) {
            console.log("Man kan inte ta ut mer pengar än vad det finns på kontot.")
        } else {
            this.balance -= amount;
        }
    }

    showInfo(): void {
        console.log(`Account holder: ${this.holder}`);
        console.log(`Balance: ${this.balance}`);
    }
}