# 0x03. ES6 data manipulation

## Description
This project focuses on working with data manipulation in JavaScript (ES6). It covers how to use `map`, `filter`, and `reduce` on arrays, typed arrays, and the Set, Map, and Weak link data structures.

## Learning Objectives
At the end of this project, you should be able to explain to anyone, without the help of Google:
- How to use `map`, `filter` and `reduce` on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

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
| **0. Basic list of objects** | Create a function that returns an array of student objects | `0-get_list_students.js` |
| **1. More mapping** | Create a function that returns array of student ids | `1-get_list_student_ids.js` |
| **2. Filter** | Create a function that filters students by location | `2-get_students_by_loc.js` |
| **3. Reduce** | Create a function that returns the sum of student ids | `3-get_ids_sum.js` |
| **4. Combine** | Create a function that updates student grades by city | `4-update_grade_by_city.js` |
| **5. Typed Arrays** | Create a function that returns a new ArrayBuffer | `5-typed_arrays.js` |
| **6. Set data structure** | Create a function that returns a Set from an array | `6-set.js` |
| **7. More set data structure** | Create a function that checks if all elements exist in a set | `7-has_array_values.js` |
| **8. Clean set** | Create a function that cleans a set and returns a string | `8-clean_set.js` |
| **9. Map data structure** | Create a function that returns a map of groceries | `9-groceries_list.js` |
| **10. More map data structure** | Create a function that updates unique items in a map | `10-update_uniq_items.js` |
| **11. Weak link data structure** | Implement a WeakMap to track API queries | `100-weak.js` |

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

