// Pricing class for handling price-related data and operations
export default class Pricing {
  // Initialize with amount and currency
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Retrieve the price amount
  get amount() {
    return this._amount;
  }

  // Update the price amount
  set amount(n) {
    this._amount = n;
  }

  // Retrieve the currency details
  get currency() {
    return this._currency;
  }

  // Update the currency details
  set currency(n) {
    this._currency = n;
  }

  // Format price with currency name and code
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Convert price using a given conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
