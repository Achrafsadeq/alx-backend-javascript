const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when passed 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithExactly('The total is: 120'));
  });

  it('should log "The total is: 20" when passed 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWithExactly('The total is: 20'));
  });
});
