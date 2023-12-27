const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const pi = input[1].split(" ").map(Number);

pi.sort((a, b) => a - b);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += pi.slice(0, i).reduce((acc, cur) => acc + cur, 0);
}

console.log(sum);
