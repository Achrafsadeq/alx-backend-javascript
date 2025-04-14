# 0x00. ES6 Basics

## Description
This project introduces the fundamentals of ECMAScript 6 (ES6), the significant update to JavaScript. It covers new syntax, features, and improvements that make JavaScript more powerful and easier to work with.

## Learning Objectives
At the end of this project, you should be able to explain:
- What ES6 is and its key features
- The difference between `const` and `let` declarations
- Block-scoped variables and functions
- Arrow functions and default parameters
- Rest and spread operators
- Template literals for string interpolation
- Enhanced object literals and property shorthand
- Iterators and the `for-of` loop

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
| **0. Const or let?** | Modify functions to use `const` and `let` properly | `0-constants.js` |
| **1. Block Scope** | Prevent variable overwriting in conditional blocks | `1-block-scoped.js` |
| **2. Arrow functions** | Convert standard function to arrow syntax | `2-arrow.js` |
| **3. Parameter defaults** | Condense function to one line with default parameters | `3-default-parameter.js` |
| **4. Rest parameter** | Return number of arguments using rest syntax | `4-rest-parameter.js` |
| **5. Spread syntax** | Concatenate arrays and string characters in one line | `5-spread-operator.js` |
| **6. Template literals** | Rewrite return statement using template literals | `6-string-interpolation.js` |
| **7. Property shorthand** | Simplify object property assignment | `7-getBudgetObject.js` |
| **8. Computed property names** | Use ES6 computed property names | `8-getBudgetCurrentYear.js` |
| **9. Method properties** | Use ES6 method properties in object | `9-getFullBudget.js` |
| **10. for...of loop** | Rewrite function using `for...of` loop | `10-loops.js` |
| **11. Create employees object** | Return object with department and employees | `11-createEmployeesObject.js` |
| **12. Create report object** | Return object with allEmployees and method | `12-createReportObject.js` |
| **13. Iterator object** | Create iterator for all employees | `100-createIteratorObject.js` |
| **14. Iterate through object** | Return employee names separated | `101-iterateThroughObject.js` |

## Configuration Files
- `.eslintrc.js` - ESLint configuration
- `babel.config.js` - Babel configuration
- `package.json` - Project dependencies

## Mission Director
This project is supervised by the ALX Software Engineering Program.

## Developer
**Codename**: Achraf Sadaeq

## Acknowledgments
Holberton School, in collaboration with the ALX Software Engineering Program, developed this project for educational purposes.
