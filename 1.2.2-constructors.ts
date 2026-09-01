class Product {
    name: string = "";
    price: number = 0;
    stockQuantity: number = 0;
    inStock: boolean = false;

    constructor(name: string, price: number, stockQuantity: number, inStock: boolean) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.inStock = inStock;
    }
}

const product1 = new Product("Tangentbord", 49.90, 12, true);
const product2 = new Product("Bildskärm", 249.90, 4, true); 
const product3 = new Product("Webbkamera", 79.90, 0, false); 

console.log(product1)
console.log(product2)
console.log(product3)