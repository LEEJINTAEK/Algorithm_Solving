function solution(n) {
  const matrix = Array.from({ length: n }, () => []);

  let num = 0;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // 위쪽 행
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = num += 1;
    }
    rowStart += 1;

    // 오른쪽 열
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = num += 1;
    }
    colEnd -= 1;

    // 아래쪽 행
    for (let i = colEnd; i >= colStart; i--) {
      matrix[rowEnd][i] = num += 1;
    }
    rowEnd -= 1;

    // 왼쪽 열
    for (let i = rowEnd; i >= rowStart; i--) {
      matrix[i][colStart] = num += 1;
    }
    colStart += 1;
  }

  return matrix;
}
