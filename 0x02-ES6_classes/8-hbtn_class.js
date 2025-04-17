// Define and export the ALX class for representing ALX entities
export default class ALXClass {
  // Constructor initializes ALX with size and location
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Custom valueOf method returning the size
  valueOf() {
    return this._size;
  }

  // Custom toString method returning the location
  toString() {
    return this._location;
  }
}
