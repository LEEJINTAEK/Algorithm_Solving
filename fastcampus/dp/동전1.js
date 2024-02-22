// const file = require("fs").readFileSync("/dev/stdin");
// const input = file.toString().split("\n");
const input = ["3 10", "1", "2", "5"];

const [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);
const dp = Array.from({ length: k + 1 }, () => 0);

dp[0] = 1; // 0원을 만드는 경우의 수는 1가지입니다.

for (let i = 0; i < n; i++) {
  for (let j = coins[i]; j <= k; j++) {
    dp[j] += dp[j - coins[i]];
  }
}

console.log(dp[k]);
