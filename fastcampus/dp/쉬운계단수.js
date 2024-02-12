const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["2"];

const n = Number(input[0]);
const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));

for (let j = 1; j <= 9; j++) {
  dp[1][j] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j > 0) {
      dp[i][j] += dp[i - 1][j - 1];
    }
    if (j < 9) {
      dp[i][j] += dp[i - 1][j + 1];
    }
    dp[i][j] %= Number(1e9);
  }
}

const answer = dp[n].reduce((a, b) => a + b, 0);

console.log(answer % Number(1e9));
