const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const totalBudget = Number(input[2]);

let [start, end] = [1, Math.max(...arr)];

let maxBudget = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let total = 0;

  for (const x of arr) {
    total += Math.min(x, mid);
  }

  if (total <= totalBudget) {
    maxBudget = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(maxBudget);
