const input = ["2", "6", "12"];
const testCase = Number(input[0]);
const dp = Array(101).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i < 101; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (let i = 1; i <= testCase; i++) {
  const n = Number(input[i]);
  console.log(dp[n - 1]);
}
