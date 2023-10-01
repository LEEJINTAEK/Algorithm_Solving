function solution(board) {
  const len = board.length;
  const map = Array.from({ length: len }, () =>
    Array.from({ length: len }, () => 0)
  );
  const outside = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        map[i][j] = 1;
        for (const [x, y] of outside) {
          if (i + y >= 0 && i + y < len && j + x >= 0 && j + x < len) {
            map[i + y][j + x] += 1;
          }
        }
      }
    }
  }
  return map.flat(1).filter((x) => x === 0).length;
}
