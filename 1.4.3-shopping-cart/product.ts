export default class Product {

    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {

        if (price < 0) {
            console.log("priset kan inte vara negativt")
        }
        this._name = name;
        this._price = price;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }
}