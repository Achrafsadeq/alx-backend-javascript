// Import the Building class from 5-building.js
import Building from './5-building';

// Define and export the SkyHighBuilding class that extends Building
export default class SkyHighBuilding extends Building {
  // Constructor initializes square footage and number of floors
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter for floors attribute
  get floors() {
    return this._floors;
  }

  // Implements required evacuation warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
