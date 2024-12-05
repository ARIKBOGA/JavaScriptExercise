class Employee {
    constructor(firstName, lastName, nationality, role, salary, employeeNumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.nationality = nationality;
      this.role = role;
      this.salary = salary;
      this.employeeNumber = employeeNumber || this.generateEmployeeNumber();
    }
  
    generateEmployeeNumber() {
      return Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`; // Correctly using this.firstName and this.lastName
    }
  
    getAnnualSalary() {
      return this.salary * 12;
    }
  
    getEmployeeDetails() {
      return {
        name: this.getFullName(),
        role: this.role,
        salary: this.salary,
        nationality: this.nationality,
        annualSalary: this.getAnnualSalary(),
        employeeNumber: this.employeeNumber,
      };
    }
  }
  
  const employees = [];
  
  // Factory function to create employees
  const createEmployee = (firstName, lastName, nationality, role, salary, employeeNumber) => {
    const employee = new Employee(firstName, lastName, nationality, role, salary, employeeNumber);
    employees.push(employee);
  };
  
  // Create employees
  createEmployee("Burak", "Arıkboğa", "Turkish", "QA", 5000, 42);
  createEmployee("Selim", "Levent", "Turkish", "PM", 7000, 49);
  createEmployee("John", "Doe", "English", "Developer", 5500, 44);
  createEmployee("Hans", "Zimmerman", "German", "Developer", 5700, 50);
  createEmployee("Ramadan", "Hussein", "Pakistani", "QA", 5000); // Random employee number
  createEmployee("Ivan", "Ivanov", "Russian", "SM", 4000, 99);
  
  // Display QA employees
  employees
    .filter(employee => employee.role === "QA")
    .forEach(employee => {
      console.log(employee.getEmployeeDetails());
    });