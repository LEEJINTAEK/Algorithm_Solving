const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const phase = Number(input[0]);

console.log(Math.pow(Math.pow(2, phase) + 1, 2));
