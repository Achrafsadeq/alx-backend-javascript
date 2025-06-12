const sinon = require('sinon');
const Utils = require('./utils');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('should stub Utils.calculateNumber to return 10 and check arguments', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Assert the stub was called correctly
    assert(stub.calledOnceWithExactly('SUM', 100, 20));

    // Assert the console.log was called with correct message
    assert(consoleSpy.calledOnceWithExactly('The total is: 10'));

    // Restore original functions
    stub.restore();
    consoleSpy.restore();
  });
});
