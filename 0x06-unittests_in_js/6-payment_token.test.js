const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with correct response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done(); // Call done when test is complete
      })
      .catch((err) => done(err)); // Fail test on any error
  });
});
