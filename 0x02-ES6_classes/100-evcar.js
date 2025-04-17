import Car from './10-car';

export default class EVCar extends Car {
  // Constructor initializes brand, motor, color, and range
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Creates a new Car instance instead of EVCar
  cloneCar() {
    return new Car();
  }
}
