// Example: Iterate over an array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

let myString = "Selim Levent";
for (let char of myString) {
  console.log(`Character: ${char}`);
}

let numbers = [1, 2, 3, 4, 5, 6];
let doubledNumbers = numbers.map((p) => p * 2);
doubledNumbers.forEach((each) => console.log(each));

const getEmployeeNumber = function () {
  return Math.floor(Math.random() * (100 - 1)) + 1;
};

let myObj = {
  name: "Burak",
  role: "QA",
  salary: 100000,
  employeeNumber: function () {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1; // Generates a random integer between 1 and 100
  },
};

for (const key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    // Check if the property is a function
    if (typeof myObj[key] === "function") {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${myObj[key]()}`
      );
    } else {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${myObj[key]}`
      );
    }
  }
}

console.log("Employee Details:");
Object.entries(myObj).forEach(([key, value]) => {
  if (typeof value === "function") {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${value()}`);
  } else {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${value}`);
  }
});
