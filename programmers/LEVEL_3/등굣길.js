function solution(m, n, puddles) {
  const mod = 1000000007;
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  dp[0][0] = 1;

  for (const [i, j] of puddles) {
    dp[j - 1][i - 1] = -1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
        continue;
      }
      if (i > 0) {
        dp[i][j] += dp[i - 1][j] % mod;
      }
      if (j > 0) {
        dp[i][j] += dp[i][j - 1] % mod;
      }
    }
  }

  return dp[n - 1][m - 1] % mod;
}
