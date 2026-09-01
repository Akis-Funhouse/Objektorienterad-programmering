import { createInterface } from "node:readline/promises";
import BankAccount from "./bank-account.js";

async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const name = await rl.question("Vad heter du?: ");
    const initialBalance = Number(
        await rl.question("Ange ingående saldo: ")
    );

    const account = new BankAccount(name, initialBalance);

console.log(`Välkommen, ${account.name}!`)

let running = true;

while (running) {
    console.log(`
    -Bank Konto-

    1. Visa saldo

    2. Sätt in pengar

    3. Ta ut pengar

    4. Exit
    `);
    

     const choice = await rl.question("Välj ett alternativ: ");

 switch (choice) {
     case "1":
         console.log(`Saldo: ${account.balance} €`);
         break;

     case "2": {
         const amount = Number(
             await rl.question("Belopp att sätta in: ")
         );

         const oldBalance = account.balance;
         account.deposit(amount);

         if (account.balance !== oldBalance) {
             console.log(`Insatt ${amount} €.`);
         } else {
             console.log("Ogiltigt belopp. Insättningen måste vara större än 0.");
         }

         break;
     }

     case "3": {
         const amount = Number(
             await rl.question("Belopp att ta ut: ")
         );

         const oldBalance = account.balance;
         account.withdraw(amount);

         if (account.balance !== oldBalance) {
             console.log(`tog ut ${amount} €.`);
         } else {
             console.log(
                 "Ogiltigt uttag. Kontrollera beloppet och ditt saldo."
             );
         }

         break;
     }

     case "4":
         running = false;
         console.log("Hejdå!");
         break;

     default:
         console.log("Ogiltigt val. Välj 1-4.");
        }
    }
    rl.close();
};
main();