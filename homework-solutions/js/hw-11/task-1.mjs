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
  };
  get lastName(){
    return this._lastName;
  };
  get profession(){
    return this._profession
  };
  get salary(){
    return this.#salary
  }
  set firstName(value){
    return this._firstName = value;
  };
  set lastName(value){
    return this._lastName = value;
  };
  set profession(value){
    return this._profession = value;
  };
  set salary(value){
    if (value < 0 || typeof (value) !== 'number') {
      throw new Error('Invalid salary');
    } else {
    return this.#salary = value;
    }
  }
getFullName(){ 
    return `${this.firstName} ${this.lastName}`;
  }
}


const emp1 = new Employee('John', 'Doe', 'Developer', 3000);

console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100
console.log(emp1.getFullName()); 
class Company {
  constructor(title,phone,address,employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this._employees = employees;
  }
  get title(){
    return this._title;
  };
  get phone () {
    return this._phone;
  };
  get address(){
    return this._address;
  }
  }
  }

}

export { Employee, Company };
