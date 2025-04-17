// Define and export the Airport class for representing airport information
export default class Airport {
  // Constructor initializes airport with name and code
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Custom toString method returning airport code in object notation
  toString() {
    return `[object ${this._code}]`;
  }
}
