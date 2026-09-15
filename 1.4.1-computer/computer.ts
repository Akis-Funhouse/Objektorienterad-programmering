import Processor from "./processor.js";

export default class Computer {

    model: string;
    processor: Processor;

    constructor(model: string, processor: Processor) {
        this.model = model;
        this.processor = processor;
    }

    showInfo(): void {
        console.log(`${this.model}`)
        console.log(`${this.processor.model}`)
        console.log(`${this.processor.cores}`)
        console.log(`${this.processor.speed} GHz`)
    }
}