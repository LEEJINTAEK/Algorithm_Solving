function solution1(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}

function solution2(arr1, arr2) {
  const row1 = arr1.length;
  const col1 = arr1[0].length;
  const col2 = arr2[0].length;
  const answer = [];

  for (let i = 0; i < row1; i++) {
    answer[i] = [];
    for (let j = 0; j < col2; j++) {
      let sum = 0;
      for (let k = 0; k < col1; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      answer[i][j] = sum;
    }
  }

  return answer;
}
