import Car from './10-car';

// Define and export the EVCar class, which extends Car
export default class EVCar extends Car {
  // Constructor initializes brand, motor, color, and range for the EV car
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor with brand, motor, and color
    this._range = range; // Initialize the range of the electric car
  }

  // Override cloneCar method to create a new instance of the Car class (Note: This is not cloning EVCar)
  cloneCar() {
    return new Car(); // Creates a new Car instance (not EVCar instance)
  }
}
