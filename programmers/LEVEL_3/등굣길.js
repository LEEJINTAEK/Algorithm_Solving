function solution(m, n, puddles) {
  const mod = 1000000007;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (const [m, n] of puddles) {
    dp[n][m] = -1;
  }
  dp[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
        continue;
      }
      dp[i][j] += dp[i][j - 1] % mod;
      dp[i][j] += dp[i - 1][j] % mod;
    }
  }

  return dp[n][m] % mod;
}
