function solution(m, n, board) {
  board = board.map((row) => row.split(""));

  let answer = 0;
  let isRemoved = true;

  while (isRemoved) {
    isRemoved = false;
    const marked = new Array(m).fill(0).map(() => new Array(n).fill(false));

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          marked[i][j] = true;
          marked[i][j + 1] = true;
          marked[i + 1][j] = true;
          marked[i + 1][j + 1] = true;
        }
      }
    }

    // 지워질 블록을 제거하고 블록이 지워진 횟수 증가
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (marked[i][j]) {
          board[i][j] = "";
          answer++;
          isRemoved = true;
        }
      }
    }

    // 블록이 지워진 후 빈 공간을 채우기
    for (let j = 0; j < n; j++) {
      let emptyIdx = m - 1;
      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] === "") {
          continue;
        }
        board[emptyIdx][j] = board[i][j];
        emptyIdx -= 1;
      }
      // 빈 공간 위의 칸들을 빈 문자열로 설정
      for (let i = emptyIdx; i >= 0; i--) {
        board[i][j] = "";
      }
    }
  }

  return answer;
}
