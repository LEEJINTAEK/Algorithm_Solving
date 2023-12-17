function solution(board) {
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  const [rowLen, colLen] = [board.length, board[0].length];
  const visited = Array.from({ length: rowLen }, () =>
    Array(colLen).fill(false)
  );
  const queue = [];

  for (let i = 0; i < rowLen; i++) {
    const j = board[i].indexOf("R");
    if (j !== -1) {
      queue.push([i, j, 0]);
      visited[i][j] = true;
      break;
    }
  }

  while (queue.length) {
    const [row, col, cnt] = queue.shift();
    if (board[row][col] === "G") {
      return cnt;
    }

    for (let i = 0; i < dx.length; i++) {
      let [nRow, nCol, nCnt] = [row + dy[i], col + dx[i], cnt];

      while (
        nRow >= 0 &&
        nCol >= 0 &&
        nRow < rowLen &&
        nCol < colLen &&
        board[nRow][nCol] !== "D"
      ) {
        nRow += dy[i];
        nCol += dx[i];
      }

      nRow -= dy[i];
      nCol -= dx[i];
      nCnt += 1;

      if (!visited[nRow][nCol]) {
        visited[nRow][nCol] = true;
        queue.push([nRow, nCol, nCnt]);
      }
    }
  }

  return -1;
}
