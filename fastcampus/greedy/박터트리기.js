const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(n, k) {
  let sum = 0;
  for (let i = 1; i <= k; i++) {
    sum += i;
  }
  if (sum > n) {
    return -1;
  }

  n -= sum;
  if (n % k === 0) {
    return k - 1;
  }
  return k;
}

const [n, k] = input[0].split(" ").map(Number);
console.log(solution(n, k));
