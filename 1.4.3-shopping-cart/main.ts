import Product from "./product.js"
import Customer from "./customer.js"

const customer = new Customer("Anna");

const keyboard = new Product("Keyboard", 49.90);
const mouse = new Product("Mouse", 24.90);
const monitor = new Product("Monitor", 199.00);
const headphones = new Product("Headphones", 79.90);

const cart = customer.shoppingcart;

cart.addProduct(keyboard);
cart.addProduct(mouse);
cart.addProduct(monitor);

cart. showProducts();

console.log(`totalla priset: ${cart.getTotalPrice().toFixed(2)} €`)

console.log("\n -Tar bort musen-")

cart.removeProduct("Mouse");

cart.showProducts();

console.log(`totalla priset: ${cart.getTotalPrice().toFixed(2)} €`)