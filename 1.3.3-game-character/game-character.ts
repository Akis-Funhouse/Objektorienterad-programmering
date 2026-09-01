export default class GameCharacter {

    private _name: string;
    private _health: number;
    private _maxHealth: number;

    constructor(name: string, maxHealth: number ) {
        this._name = name;
        this._health = maxHealth;
        this._maxHealth = maxHealth;
    }
    
    get name() : string {
        return this._name;
    }

    
    get health() : number {
        return this._health; 
    }

    
    get maxHealth() : number {
        return this._maxHealth; 
    }

    takeDamage(amount: number): void {
        if (amount < 0) {
            console.log("Amount för takeDamage måste vara större än 0")
        } else {
            this._health -= amount;
        }

        if (this._health < 0) {
            this._health = 0;
            console.log("Hälsan kan aldrig bli mindre än noll")
        }

    }

    heal(amount: number): void {
        if (amount <= 0) {
            console.log("Amount för heal måste vara större än 0")
        } else {
            this._health += amount;
        }

        if (this._health > this._maxHealth) {
            this._health = this.maxHealth;
            console.log("Hälsan kan aldrig bli större än maxHealth")
        }
    } 

    isAlive(): boolean {
        return this._health > 0;
    }

    showInfo(): void {
        console.log(`Character: ${this._name}`);
        console.log(`Health: ${this._health} / ${this._maxHealth}`);
    }
}