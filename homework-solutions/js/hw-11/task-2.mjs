class Employee {
  #salary
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string') {
      throw new Error('Type of First name is wrong');
    }
    if (value.length < 2) {
      throw new Error('First name is short');
    }
    if (value.length > 50) {
      throw new Error('First name is long');
    }
    if (!/^[A-Za-z]+$/.test(value)) {
      throw new Error('First name contains invalid characters');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string') {
      throw new Error('Type of Last name is wrong');
    }
    if (value.length < 2) {
      throw new Error('Last name is short');
    }
    if (value.length > 50) {
      throw new Error('Last name is long');
    }
    if (!/^[A-Za-z]+$/.test(value)) {
      throw new Error('Last name contains invalid characters');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string') {
      throw new Error('Type of Profession is wrong');
    }
    if (value.trim().replaceAll(' ', '').length === 0) {
      throw new Error('Profession is empty');
    }
    if (!/^[A-Za-z ]+$/.test(value)) {
      throw new Error('Profession contains invalid characters');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value === 'number' && value > 0 && value < 10000) {
      this.#salary = value;
    } else {
      throw new Error('Invalid salary');
    }
  }

  getEmployees() {
    return this._employees;
  }

  getTotalSalary() {
    return this._employees.reduce((total, employee) => total + employee.salary, 0);
  }
}

class Company {
  _employees = [];
  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this._employees = employees;
  }

  getEmployees() {
    return this._employees;
  }

  getTotalSalary() {
    return this._employees.reduce((total, employee) => total + employee.salary, 0);
  }

  findEmployeeByName(firstName) {
    const employee = this._employees.find(employee => employee.firstName === firstName);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  }

  removeEmployee(firstName) {
    const index = this._getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error('Employee not found');
    }
    this._employees.splice(index, 1);
  }

  _getEmployeeIndex(firstName) {
    return this._employees.findIndex(employee => employee.firstName === firstName);
  }

  addEmployee(employee) {
    this._employees.push(employee);
  }
}

export { Employee, Company };
