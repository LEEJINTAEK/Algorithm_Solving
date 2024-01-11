// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = ["4 11", "802", "743", "457", "539"];
const [k, n] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= k; i++) {
  arr.push(Number(input[i]));
}

let [start, end] = [1, Math.max(...arr)];
let answer = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let count = 0;
  for (const line of arr) {
    count += parseInt(line / mid);
  }

  if (count < n) {
    end = mid - 1;
  } else {
    start = mid + 1;
    answer = mid;
  }
}

console.log(answer);
