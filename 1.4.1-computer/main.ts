import Processor from "./processor.js";
import Computer from "./computer.js";

const processor1 = new Processor("Ryzen 7", 8, 4.2);
const computer1 = new Computer("Lenovo Thinkpad", processor1);

computer1.showInfo();

const processor2 = new Processor("Intel Core 5 Ultra", 10, 3.3);
const computer2 = new Computer("MSI cyborg", processor2)

computer2.showInfo();

