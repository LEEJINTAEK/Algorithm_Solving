function solution(board, skill) {
  const m = board.length;
  const n = board[0].length;
  const effectBoard = Array.from(Array(m), () => new Array(n).fill(0));

  for (let k = 0; k < skill.length; k++) {
    const [type, r1, c1, r2, c2, degree] = skill[k];
    const effect = type === 1 ? -degree : degree;

    effectBoard[r1][c1] += effect;
    if (r2 + 1 < m) {
      effectBoard[r2 + 1][c1] -= effect;
    }
    if (c2 + 1 < n) {
      effectBoard[r1][c2 + 1] -= effect;
    }
    if (r2 + 1 < m && c2 + 1 < n) {
      effectBoard[r2 + 1][c2 + 1] += effect;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) effectBoard[i][j] += effectBoard[i - 1][j];
      if (j > 0) effectBoard[i][j] += effectBoard[i][j - 1];
      if (i > 0 && j > 0) effectBoard[i][j] -= effectBoard[i - 1][j - 1];
    }
  }

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] + effectBoard[i][j] > 0) count++;
    }
  }

  return count;
}
