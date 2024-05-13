const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4"];
const num = Number(input[0]);

const dp = Array(1000001).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= num; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[num]);

//
//
//파이썬

// n = int(input())
// dp = [0 for _ in range(1000001)]
// dp[1] = 1
// dp[2] = 2
// for i in range(3,n+1):
//     dp[i] = (dp[i-1] + dp[i-2]) % 15746
// print(dp[n])
