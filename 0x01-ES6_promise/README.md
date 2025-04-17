# 0x01. ES6 Promises

## Description
This project focuses on working with Promises in JavaScript (ES6). It covers how to create, handle, and chain promises, as well as error handling and working with multiple promises.

## Learning Objectives
At the end of this project, you should be able to explain:
- What Promises are and how to use them
- The differences between `resolve` and `reject` in Promises
- How to handle multiple promises with `Promise.all`
- Error handling with `.catch()` and `try/catch`
- The difference between `Promise.resolve` and `Promise.reject`
- How to work with async/await syntax

## Requirements
- **OS**: Ubuntu 18.04 LTS
- **Node.js**: v12.11.x
- **Testing Framework**: Jest
- **Linter**: ESLint with provided configuration
- All files must end with a new line
- Code should use `.js` extension
- All functions must be exported

## Setup Instructions

### Install Node.js 12.11.x
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
| **0. Keep every promise** | Return a Promise using prototype function | `0-promise.js` |
| **1. Don't make a promise...** | Return promise that resolves or rejects based on boolean | `1-promise.js` |
| **2. Catch me if you can!** | Append handlers to function that returns promise | `2-then.js` |
| **3. Handle multiple promises** | Resolve all promises and log results | `3-all.js` |
| **4. Simple promise** | Return resolved promise with object | `4-user-promise.js` |
| **5. Reject the promises** | Return rejected promise with error | `5-photo-reject.js` |
| **6. Handle multiple promises** | Return array of settled promise results | `6-final-user.js` |
| **7. Load balancer** | Return value from promise that resolves first | `7-load_balancer.js` |
| **8. Throw error / try catch** | Throw error when dividing by zero | `8-try.js` |
| **9. Throw an error** | Create queue array with function results/errors | `9-try.js` |
| **10. Await / Async** | Call async functions and return combined object | `100-await.js` |

## Configuration Files
- `.eslintrc.js` - ESLint configuration
- `babel.config.js` - Babel configuration
- `package.json` - Project dependencies
- `utils.js` - Contains `uploadPhoto` and `createUser` functions

## Mission Director
This project is supervised by the ALX Software Engineering Program.

## Developer
**Codename**: Achraf Sadeq

## Acknowledgments
Holberton School, in collaboration with the ALX Software Engineering Program, developed this project for educational purposes.

