// Define and export the Car class for representing car objects
export default class Car {
  // Constructor initializes car with brand, motor, and color
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Creates and returns a new instance with identical properties
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
