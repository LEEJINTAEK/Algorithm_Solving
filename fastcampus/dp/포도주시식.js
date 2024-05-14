const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["6", "6", "10", "13", "9", "8", "1"];
const n = Number(input.shift());
const drink = input.map(Number);
const dp = Array(n).fill(0);
dp[0] = drink[0];
dp[1] = drink[0] + drink[1];
dp[2] = Math.max(drink[0] + drink[1], drink[0] + drink[2], drink[1] + drink[2]);
dp;
for (let i = 3; i < n; i++) {
  dp[i] = dp[i - 1];
  dp[i] = Math.max(dp[i], drink[i] + dp[i - 2]);
  dp[i] = Math.max(dp[i], drink[i] + drink[i - 1] + dp[i - 3]);
}
console.log(dp[n - 1]);

//
//
//파이썬
// n = int(input())
// drink = [int(input()) for _ in range(n)]
// dp = [0 for _ in range(n)]
// dp[0] = drink[0]
// dp[1] = drink[0] + drink[1]
// dp[2] = max(dp[1], drink[0] + drink[2], drink[1] + drink[2])
// for i in range(3, n):
//     dp[i] = dp[i-1]
//     dp[i] = max(dp[i], drink[i] + dp[i-2])
//     dp[i] = max(dp[i], drink[i] + drink[i-1] + dp[i-3])

// print(dp[n-1])
