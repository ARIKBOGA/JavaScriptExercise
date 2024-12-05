let firstName = "Burak";
let lasstName = "Arıkboğa";

const man = {
  firstName,
  lasstName,
};

const fullName2 = `${firstName} ${lasstName}`;

console.log(man);
console.log(fullName2);

let employee = {
  name: "Selim",
  nationality: "Turkish",
  role: "QA",
  salary: 100000,
  /**
   * Generates a random integer between 1 and 100
   * @returns {Number} Random integer
   */
  getEmployeeNumber: function () {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1; // Generates a random integer between 1 and 100
  },
  /**
   * Gets the employee details (name, role, salary, employee number)
   * @returns {Object} Employee details
   */
  getEmployeeDetails: function () {
    return {
      name: this.name,
      role: this.role,
      salary: this.salary,
      nationality: this.nationality,
      employeeNumber: this.getEmployeeNumber(),
    };
  },
};

for (const key in employee) {
  if (employee.hasOwnProperty(key) && key !== "getEmployeeDetails") {
    if (typeof employee[key] === "function") {
      console.log(
        `${key.charAt(0).toUpperCase() + key.slice(1)} : ${employee[key]()}`
      );
    } else {
      console.log(
        `${key.charAt(0).toUpperCase() + key.slice(1)} : ${employee[key]}`
      );
    }
  }
}
