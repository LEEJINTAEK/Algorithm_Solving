function solution(triangle) {
  const len = triangle.length;
  //dp 생성
  const dp = Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = Array(triangle[i].length).fill(0);
  }

  //바닥 채우기
  for (let i = 0; i < triangle[len - 1].length; i++) {
    dp[len - 1][i] = triangle[len - 1][i];
  }

  //찾기
  for (let i = len - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = triangle[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}
