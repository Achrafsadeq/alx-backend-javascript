#!/usr/bin/env node

/**
 * calculateNumber - performs mathematical operations on two rounded numbers
 * @param {string} type - the operation type: 'SUM', 'SUBTRACT', or 'DIVIDE'
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {number|string} the result of the operation, or 'Error' for division by zero
 */

static calculateNumber(type, a, b) {
  const operands = {
    SUM: (a, b) => a + b,
    SUBTRACT: (a, b) => a - b,
    DIVIDE: (a, b) => (b !== 0 ? a / b : 'Error'),
  };

  return operands[type](Math.round(a), Math.round(b));
}

module.exports = Utils;
