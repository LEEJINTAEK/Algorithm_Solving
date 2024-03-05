// const file = require("fs").readFileSync("/dev/stdin");
// const input = file.toString().split("\n");
const input = ["5 3", "1 2 3 1 2"];
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;
const data = [sum];
for (const num of arr) {
  sum += num;
  data.push(sum % m);
}

const check = new Map();
for (const num of data) {
  check.set(num, (check.get(num) || 0) + 1);
}

let answer = 0;
for (let i = 0; i < m; i++) {
  if (check.has(i)) {
    answer += parseInt((check.get(i) * (check.get(i) - 1)) / 2);
  }
}
console.log(answer);
