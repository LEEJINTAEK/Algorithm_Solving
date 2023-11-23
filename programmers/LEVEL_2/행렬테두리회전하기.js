function solution(rows, columns, queries) {
  let i = 0;
  const map = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => {
      i += 1;
      return i;
    })
  );

  const answer = [];
  for (const [row1, col1, row2, col2] of queries) {
    let matrix = JSON.parse(JSON.stringify(map));

    const nums = [];
    //위
    for (let col = col1; col <= col2 - 1; col++) {
      map[row1 - 1][col] = matrix[row1 - 1][col - 1];
      nums.push(matrix[row1 - 1][col - 1]);
    }
    //오른쪽
    for (let row = row1; row <= row2 - 1; row++) {
      map[row][col2 - 1] = matrix[row - 1][col2 - 1];
      nums.push(matrix[row - 1][col2 - 1]);
    }
    //아래
    for (let col = col2 - 2; col >= col1 - 1; col--) {
      map[row2 - 1][col] = matrix[row2 - 1][col + 1];
      nums.push(matrix[row2 - 1][col + 1]);
    }
    //왼쪽
    for (let row = row2 - 2; row >= row1 - 1; row--) {
      map[row][col1 - 1] = matrix[row + 1][col1 - 1];
      nums.push(matrix[row + 1][col1 - 1]);
    }
    answer.push(Math.min(...nums));
  }

  return answer;
}
