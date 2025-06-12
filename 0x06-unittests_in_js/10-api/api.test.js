const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request.get('http://localhost:7865/', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return 200 for valid id', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for invalid id', (done) => {
    request.get('http://localhost:7865/cart/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return correct payment methods object', (done) => {
    request.get('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('should respond with welcome message using userName', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' },
      headers: {
        'Content-Type': 'application/json'
      }
    };

    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
