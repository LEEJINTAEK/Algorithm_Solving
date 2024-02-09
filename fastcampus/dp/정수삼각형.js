const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5", "7", "3 8", "8 1 0", "2 7 4 4", "4 5 2 6 5"];
const n = Number(input[0]);
const dp = Array.from({ length: n }, (_, i) => Array(i).fill(0));
dp.push(input[n].split(" ").map(Number));

for (let i = n - 1; i > 0; i--) {
  const data = input[i].split(" ").map(Number);

  for (let j = 0; j < data.length; j++) {
    dp[i][j] = Math.max(data[j] + dp[i + 1][j], data[j] + dp[i + 1][j + 1]);
  }
}
console.log(dp[1][0]);
