// Abstract Building class
export default class Building {
  // Initialize with square footage
  constructor(sqft) {
    // Verify if the class is being instantiated directly or extended properly
    if (this.constructor === Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    // Ensure sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  // Getter for square footage
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be overridden by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
