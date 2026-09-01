export default class Thermostat {
    private _temperature: number;
    private _minTemperature: number;
    private _maxTemperature: number;

    constructor(temperature: number, minTemperature: number, maxTemperature: number) {
        this._temperature = temperature;
        this._minTemperature = minTemperature;
        this._maxTemperature = maxTemperature;
    }
get temperature(): number {
    return this._temperature;
}

get minTemperature(): number {
    return this._minTemperature;
}

get maxTemperature(): number {
    return this._maxTemperature;
}

set temperature(newTemperature: number) {
    if (newTemperature >= this.minTemperature && newTemperature <= this.maxTemperature) {
        this._temperature = newTemperature;
    } else {
        console.log(`Temperatur måste vara mellan ${this._minTemperature} och ${this._maxTemperature} grader.`)
    }
}

} 