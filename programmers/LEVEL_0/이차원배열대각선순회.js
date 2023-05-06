function solution(board, k) {
  return board
    .map((x, i) =>
      x.map((n, j) => (i + j <= k ? n : 0)).reduce((a, b) => a + b, 0)
    )
    .reduce((a, b) => a + b, 0);
}
