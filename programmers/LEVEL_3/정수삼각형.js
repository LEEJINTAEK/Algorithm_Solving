function solution(triangle) {
  const len = triangle.length;
  const dp = Array.from({ length: len }, (_, i) => Array(i + 1).fill(0));

  for (let i = 0; i < triangle[len - 1].length; i++) {
    dp[len - 1][i] = triangle[len - 1][i];
  }

  for (let i = len - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = triangle[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }
  return dp[0][0];
}
