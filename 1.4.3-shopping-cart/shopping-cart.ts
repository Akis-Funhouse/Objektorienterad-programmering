import Product from "./product.js"

export default class ShoppingCart {
    private _products: Product[] = [];

    addProduct(product: Product): void {
        this._products.push(product);
    }

    showProducts(): void {
        console.log("-Shopping cart-");

        for (const product of this._products) {
            console.log(`${product.name} - ${product.price.toFixed(2)} €`)
        }
    }

    getTotalPrice(): number {
        let total = 0;

        for (const product of this._products) {
            total += product.price
        }
        return total;
    }

    removeProduct(name: string): void {
        const index = this._products.findIndex(product => product.name === name);

        if (index !== -1) {
            this._products.splice(index, 1)
        }
    }
}