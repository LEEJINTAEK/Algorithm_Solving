const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let [start, end] = [0, Math.max(...arr)];

let answer = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let sum = 0;
  for (x of arr) {
    if (x > mid) {
      sum += x - mid;
    }
  }

  if (sum < m) {
    end = mid - 1;
  } else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);
