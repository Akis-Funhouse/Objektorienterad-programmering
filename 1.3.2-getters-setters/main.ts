import Thermostat from "./thermostat.js";

const thermostat1 = new Thermostat(20, 10, 30);

console.log("Temperatur:", thermostat1.temperature);
console.log("Min Temperatur:", thermostat1.minTemperature);
console.log("Max Temperatur:", thermostat1.maxTemperature);

// thermostat1.minTemperature = 0;

thermostat1.temperature = 24;
console.log("Efter giltig ändring:", thermostat1.temperature);

thermostat1.temperature = 5;
thermostat1.temperature = 40;



const thermostat2 = new Thermostat(18, 15, 25);

console.log("Temperatur:", thermostat2.temperature);
console.log("Min Temperatur:", thermostat2.minTemperature);
console.log("Max Temperatur:", thermostat2.maxTemperature);

thermostat2.temperature = 22;
console.log("Efter giltig ändring:", thermostat1.temperature);

thermostat2.temperature = 10;
thermostat2.temperature = 30;