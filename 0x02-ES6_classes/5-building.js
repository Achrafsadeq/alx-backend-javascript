// Building class for managing building properties
export default class Building {
  // Initialize with square footage and verify subclass implementation
  constructor(sqft) {
    this._sqft = sqft;
    // Check if subclass implements evacuationWarningMessage
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Retrieve square footage
  get sqft() {
    return this._sqft;
  }

  // Update square footage
  set sqft(value) {
    this._sqft = value;
  }
}
