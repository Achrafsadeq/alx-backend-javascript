# 0x02. ES6 classes

## Description
This project focuses on working with Classes in JavaScript (ES6). It covers how to create classes, inheritance, getters/setters, static methods, and other class-related features in ES6.

## Learning Objectives
At the end of this project, you should be able to explain:
- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols in ES6
- The difference between abstract classes and concrete classes

## Requirements
- **OS**: Ubuntu 18.04 LTS
- **Node.js**: v12.11.x
- **Testing Framework**: Jest
- **Linter**: ESLint with provided configuration
- All files must end with a new line
- Code should use `.js` extension
- All classes must be exported

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
| **0. ClassRoom** | Implement a basic ClassRoom class | `0-classroom.js` |
| **1. Let's make some classrooms** | Create multiple ClassRoom instances | `1-make_classrooms.js` |
| **2. A Course, Getters, and Setters** | Implement ALXCourse class with validation | `2-hbtn_course.js` |
| **3. Currency** | Implement Currency class with display method | `3-currency.js` |
| **4. Pricing** | Implement Pricing class with static method | `4-pricing.js` |
| **5. A Building** | Implement abstract Building class | `5-building.js` |
| **6. Inheritance** | Implement SkyHighBuilding extending Building | `6-sky_high.js` |
| **7. Airport** | Implement Airport class with custom toString | `7-airport.js` |
| **8. Primitive - ALX Class** | Implement ALXClass with valueOf/toString | `8-hbtn_class.js` |
| **9. Hoisting** | Fix hoisting issues in class implementation | `9-hoisting.js` |
| **10. Vroom** | Implement Car class with clone method | `10-car.js` |
| **11. EVCar** | Implement EVCar extending Car (advanced) | `100-evcar.js` |

## Configuration Files
- `.eslintrc.js` - ESLint configuration
- `babel.config.js` - Babel configuration
- `package.json` - Project dependencies

## Mission Director
This project is supervised by the ALX Software Engineering Program.

## Developer
**Codename**: Achraf Sadeq

## Acknowledgments
Holberton School, in collaboration with the ALX Software Engineering Program, developed this project for educational purposes.
