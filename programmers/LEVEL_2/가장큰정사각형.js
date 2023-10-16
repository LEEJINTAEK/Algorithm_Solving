function solution(board) {
  let answer = 0;
  const rows = board.length;
  const cols = board[0].length;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 1) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        }
        answer = Math.max(answer, dp[i][j]);
      }
    }
  }

  return answer * answer;
}
