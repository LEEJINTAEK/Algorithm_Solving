const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["3", "26 40 83", "49 60 57", "13 89 99"];
const n = Number(input.shift());
const cost = input.map((x) => x.split(" ").map(Number));
const dp = Array.from({ length: n }, () => Array(3).fill(1000000));

dp[0][0] = cost[0][0];
dp[0][1] = cost[0][1];
dp[0][2] = cost[0][2];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      if (j !== k) {
        dp[i][j] = Math.min(dp[i][j], cost[i][j] + dp[i - 1][k]);
      }
    }
  }
}
console.log(Math.min(...dp[n - 1]));
