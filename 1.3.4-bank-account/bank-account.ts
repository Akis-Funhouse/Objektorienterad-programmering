export default class BankAccount {

    private _balance: number;

    constructor(public name: string, initialBalance: number) {
        this._balance = initialBalance;
    }

    get balance(): number {
        return this._balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        }
    }
}