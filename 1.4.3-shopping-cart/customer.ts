import ShoppingCart from "./shopping-cart.js"

export default class Cuatomer {
    private _name: string;
    private _shoppingCart: ShoppingCart;

    constructor(name: string) {
        this._name = name;
        this._shoppingCart = new ShoppingCart();
    }

    get name(): string {
        return this._name;
    }

    get shoppingcart(): ShoppingCart {
        return this._shoppingCart;
    }
}