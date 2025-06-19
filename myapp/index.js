// const path = require("path");

// const filePath = path.join("users", "ravi", "notes.txt");

// console.log(filePath);

const { addDays } = require("date-fns");

const result = addDays(new Date(2021, 0, 20), 3);
console.log(result);
