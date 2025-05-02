"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  - Абстрактный класс Employee должен:
      Имплементировать интерфейс IPerson.
      Содержать защищенное (protected) поле: salary, не передающееся в конструктор (по дефолту 0)
      Содержать защищенный (protected) абстрактный метод: calculateSalary().,
        который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
      Метод calculateSalary() должен быть использован в конструкторе
  */
class Employee {
    name;
    surname;
    experienceYears;
    salary = 0;
    constructor(name, surname, experienceYears) {
        this.name = name;
        this.surname = surname;
        this.experienceYears = experienceYears;
        this.calculateSalary();
    }
}
/*
 - Конкретные классы Manager и Developer должны:
     Наследоваться от Employee.
     Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
     Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
     Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
     Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
     Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
       'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)
   */
class Manager extends Employee {
    preferred;
    constructor(name, surname, experienceYears, preferred) {
        super(name, surname, experienceYears);
        this.preferred = preferred;
        this.calculateSalary();
    }
    calculateSalary() {
        this.salary = this.experienceYears * 500;
    }
    getDetails() {
        return (`My name is ${this.name}, I am manager with ${this.experienceYears} years of experience in ${this.preferred} and ${this.salary} salary`);
    }
}
class developer extends Employee {
    programmingLanguage;
    constructor(name, surname, experienceYears, programmingLanguage) {
        super(name, surname, experienceYears);
        this.programmingLanguage = programmingLanguage;
        this.calculateSalary();
    }
    calculateSalary() {
        this.salary = this.experienceYears * 1000;
    }
    getDetails() {
        return (`My name is ${this.name}, I am software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary} salary`);
    }
}
const manager = new Manager('Aleksandr', 'Garnov', 5, 'scrum');
const dev = new developer('Aleksandr', 'Garnov', 3, 'js');
console.log(dev.getDetails());
console.log(manager.getDetails());
