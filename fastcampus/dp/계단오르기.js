const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
// const input = ["6", "10", "20", "15", "25", "10", "20"].map(Number);
const n = input[0];
const dp = Array.from({ length: n + 1 }, () => 0);
dp[1] = input[1];
dp[2] = input[2] + input[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(input[i] + input[i - 1] + dp[i - 3], input[i] + dp[i - 2]);
}

console.log(dp[n]);
