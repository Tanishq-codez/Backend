const fs = require("fs");

const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);
