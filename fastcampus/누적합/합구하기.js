const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");

// const input = ["5", "10 20 30 40 50", "5", "1 3", "2 4", "3 5", "1 5", "4 4"];
const [n, m] = [input[0], input[2]].map(Number);
const arr = input[1].split(" ").map(Number);
let sum = 0;
const data = [0];
for (let i = 0; i < n; i++) {
  sum += arr[i];
  data.push(sum);
}
let answer = "";
for (let i = 3; i < m + 3; i++) {
  const [left, right] = input[i].split(" ").map(Number);
  answer += data[right] - data[left - 1] + "\n";
}
console.log(answer);
