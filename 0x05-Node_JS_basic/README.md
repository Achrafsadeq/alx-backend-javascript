# 0x05. Node JS Basic

## Description
This project focuses on learning the basics of Node.js, including file operations, HTTP servers, and Express framework.

## Requirements
- **OS**: Ubuntu 18.04 LTS
- **Node.js**: v12.x.x
- **Linter**: ESLint with provided configuration
- All files must end with a new line
- Code should use `.js` extension
- All functions must be exported using `module.exports = myFunction;`
- Code will be tested using Jest (`npm run test`)

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
| **0. Executing basic javascript with Node JS** | Create function to print to STDOUT | `0-console.js` |
| **1. Using Process stdin** | Create interactive CLI program | `1-stdin.js` |
| **2. Reading a file synchronously** | Implement student count function | `2-read_file.js` |
| **3. Reading a file asynchronously** | Implement promise-based student count | `3-read_file_async.js` |
| **4. Create a small HTTP server** | Basic HTTP server with Node's http module | `4-http.js` |
| **5. Create a complex HTTP server** | HTTP server with student data endpoint | `5-http.js` |
| **6. Create HTTP server with Express** | Basic Express server | `6-http_express.js` |
| **7. Create complex HTTP server with Express** | Express server with student data endpoint | `7-http_express.js` |
| **8. Organize complex HTTP server** | Full server with controllers and routes | `full_server/utils.js, full_server/controllers/AppController.js, full_server/controllers/StudentsController.js, full_server/routes/index.js, full_server/server.js` |

## Provided Files

- `database.csv` - Sample student database
- `package.json` - Project configuration
- `babel.config.js` - Babel configuration
- `.eslintrc.js` - ESLint configuration


## Mission Director
This project is supervised by the ALX Software Engineering Program.

## Developer
**Codename**: Achraf Sadeq

## Acknowledgments
Holberton School, in collaboration with the ALX Software Engineering Program, developed this project for educational purposes.

