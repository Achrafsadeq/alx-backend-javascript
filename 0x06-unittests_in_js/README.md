# 0x06. Unit Testing in JavaScript

## Description
This project focuses on learning unit testing in JavaScript using Mocha, Chai, and Sinon libraries.

## Requirements
- **OS**: Ubuntu 18.04 LTS
- **Node.js**: v12.x.x
- **Linter**: ESLint with provided configuration
- All files must end with a new line
- Code should use `.js` extension
- All functions must be exported using `module.exports = myFunction;`
- Code will be tested using Mocha and Chai (`npm test`)

## Setup Instructions

### Install Node.js 12.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Install project dependencies
```bash
npm install
```

## Project Tasks

| **Task** | **Description** | **File** |
|----------|----------------|----------|
| **0. Basic test with Mocha and Node assertion library** | Create function to calculate rounded numbers | `0-calcul.js`, `0-calcul.test.js` |
| **1. Combining descriptions** | Upgrade calculator with operation type | `1-calcul.js`, `1-calcul.test.js` |
| **2. Basic test using Chai assertion library** | Rewrite tests using Chai expect | `2-calcul_chai.js`, `2-calcul_chai.test.js` |
| **3. Spies** | Implement payment system with spies | `utils.js`, `3-payment.js`, `3-payment.test.js` |
| **4. Stubs** | Implement payment system with stubs | `4-payment.js`, `4-payment.test.js` |
| **5. Hooks** | Test payment system with hooks | `5-payment.js`, `5-payment.test.js` |
| **6. Async tests with done** | Implement async payment token | `6-payment_token.js`, `6-payment_token.test.js` |
| **7. Skip** | Skip failing test without removing it | `7-skip.test.js` |
| **8. Basic Integration testing** | Create basic API server | `8-api/api.js`, `8-api/api.test.js` |
| **9. Regex integration testing** | Add cart endpoint with ID validation | `9-api/api.js`, `9-api/api.test.js` |
| **10. Deep equality & Post integration testing** | Add payment methods and login endpoints | `10-api/api.js`, `10-api/api.test.js` |

## Provided Files

- `package.json` - Project configuration
- `.eslintrc.js` - ESLint configuration

## Developer
**Codename**: Achraf Sadeq

## Acknowledgments
Holberton School, in collaboration with the ALX Software Engineering Program, developed this project for educational purposes.

