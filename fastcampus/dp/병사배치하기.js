// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["7", "15 11 4 8 5 2 4"];
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
arr.reverse();
const dp = Array(n).fill(1);
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(n - Math.max(...dp));
