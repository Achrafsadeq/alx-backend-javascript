export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new TypeError('must be a array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = n;
  }

  get length() {
    return this._length;
  }

  set length(zise) {
    if (typeof zise !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = zise;
  }

  get students() {
    return this._students;
  }

  set students(s) {
    if (!Array.isArray(stu)) {
      throw new TypeError('must be a array');
    }
    this._students = s;
  }
}
