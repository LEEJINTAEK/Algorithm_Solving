const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const distance = input[1].split(" ").map(Number);
const fee = input[2].split(" ").map(Number);

function solution(n, distance, fee) {
  const priority = Array.from({ length: n }, () => 0);
  priority[0] = fee[0];

  for (let i = 1; i < n; i++) {
    priority[i] = Math.min(fee[i], priority[i - 1]);
  }
  let sum = BigInt(0);

  for (let i = 0; i < n - 1; i++) {
    sum += BigInt(priority[i]) * BigInt(distance[i]);
  }

  return String(sum);
}

console.log(solution(n, distance, fee));
