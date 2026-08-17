class Product {
    name: string = "";
    price: number = 0;
    stockQuantity: number = 0;
    inStock: boolean = false;
}

const produkt1 = new Product();

produkt1.name = "Tangentbord";
produkt1.price = 49.90;
produkt1.stockQuantity = 12;
produkt1.inStock = true;

const produkt2 = new Product();

produkt2.name = "Bildskärm";
produkt2.price = 249.90;
produkt2.stockQuantity = 4;
produkt2.inStock = true;

const produkt3 = new Product();

produkt3.name = "Webbkamera";
produkt3.price = 79.90;
produkt3.stockQuantity = 0;
produkt3.inStock = false;

console.log(produkt1.name)
console.log(produkt1.price)
console.log(produkt1.stockQuantity)
console.log(produkt1.inStock)

console.log(produkt2.name)
console.log(produkt2.price)
console.log(produkt2.stockQuantity)
console.log(produkt2.inStock)

console.log(produkt3.name)
console.log(produkt3.price)
console.log(produkt3.stockQuantity)
console.log(produkt3.inStock)