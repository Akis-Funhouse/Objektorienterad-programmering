class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * this.width + 2 * this.height;
    }
}

const rectangle1 = new Rectangle(5, 8);
const rectangle2 = new Rectangle(8, 2);
const rectangle3 = new Rectangle(6, 7);

const area1 = rectangle1.calculateArea();
const perimeter1 = rectangle1.calculatePerimeter();

const area2 = rectangle2.calculateArea();
const perimeter2 = rectangle2.calculatePerimeter();

const area3 = rectangle3.calculateArea();
const perimeter3 = rectangle3.calculatePerimeter();

console.log(area1)
console.log(perimeter1)

console.log(area2)
console.log(perimeter2)

console.log(area3)
console.log(perimeter3)