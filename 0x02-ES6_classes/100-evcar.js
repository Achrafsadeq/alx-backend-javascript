import Car from './10-car';


export default class EVCar extends Car {
  // Constructor initializes brand, motor, color, and range for the EV car
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }
	
	cloneCar() {
    return new Car();
  }
}
