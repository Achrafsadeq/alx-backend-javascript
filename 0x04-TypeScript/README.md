# 0x04-TypeScript

## Description
This project focuses on learning TypeScript, a typed superset of JavaScript. It covers interfaces, classes, namespaces, type declarations, and advanced TypeScript features.

## Learning Objectives
At the end of this project, you should be able to explain to anyone, without the help of Google:
- Basic types in TypeScript
- Interfaces, Classes, and Functions in TypeScript
- Namespaces and Modules
- Type declaration files
- Advanced typing concepts

## Requirements
- **OS**: Ubuntu 18.04 LTS
- **Node.js**: v12.11.x
- **TypeScript**: v3.6.4
- **Webpack**: v4.41.2
- **Linter**: ESLint with provided configuration
- All files must end with a new line
- Code should use `.ts` extension when possible
- All functions must be exported

## Setup Instructions

### Install Node.js 12.11.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Install TypeScript and project dependencies
```bash
npm install -g typescript
npm install
```

## Project Tasks

| **Task** | **Description** | **File** |
|----------|----------------|----------|
| **0. Creating an interface for a student** | Create Student interface and render table | `task_0/js/main.ts` |
| **1. Let's build a Teacher interface** | Create Teacher interface with specific attributes | `task_1/js/main.ts` |
| **2. Extending the Teacher class** | Create Directors interface extending Teacher | `task_1/js/main.ts` |
| **3. Printing teachers** | Implement printTeacher function with interface | `task_1/js/main.ts` |
| **4. Writing a class** | Implement StudentClass with interfaces | `task_1/js/main.ts` |
| **5. Advanced types Part 1** | Create Director and Teacher classes with interfaces | `task_2/js/main.ts` |
| **6. Creating functions specific to employees** | Implement isDirector and executeWork functions | `task_2/js/main.ts` |
| **7. String literal types** | Implement Subjects type and teachClass function | `task_2/js/main.ts` |
| **8. Ambient Namespaces** | Create type declarations for CRUD operations | `task_3/js/` |
| **9. Namespace & Declaration merging** | Implement Subjects namespace with classes | `task_4/js/subjects/` |
| **10. Update task_4/js/main.ts** | Demonstrate Subject classes usage | `task_4/js/main.ts` |
| **11. Brand convention & Nominal typing** | Implement Major/Minor Credits with branding | `task_5/js/main.ts` |

## Configuration Files
- `.eslintrc.js` - ESLint configuration
- `tsconfig.json` - TypeScript configuration
- `webpack.config.js` - Webpack configuration
- `package.json` - Project dependencies

## How to Compile
To compile TypeScript files:
```bash
npm run build
```

## How to Run
To run the compiled JavaScript:
```bash
node dist/main.js
```

## Mission Director
This project is supervised by the ALX Software Engineering Program.

## Developer
**Codename**: Achraf Sadeq

## Acknowledgments
Holberton School, in collaboration with the ALX Software Engineering Program, developed this project for educational purposes.
