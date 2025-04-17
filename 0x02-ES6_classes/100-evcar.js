// 100-evcar.js
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // FIX: Call Car directly instead of using `this._brand` etc.
    return new Car(this._brand, this._motor, this._color);
  }
}
