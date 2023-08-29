//1
function solution(n) {
  const answer = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill(0));

  const size = (n * (n + 1)) / 2;

  let [i, j, count] = [0, 0, 1];

  while (count <= size) {
    while (i < n && answer[i][j] === 0) {
      answer[i][j] = count;
      i += 1;
      count += 1;
    }
    (i -= 1), (j += 1);
    while (j < n && answer[i][j] === 0) {
      answer[i][j] = count;
      j += 1;
      count += 1;
    }
    (i -= 1), (j -= 2);
    while (i > 0 && j > 0 && answer[i][j] === 0) {
      answer[i][j] = count;
      i -= 1;
      j -= 1;
      count += 1;
    }
    (i += 2), (j += 1);
  }
  return answer.flat();
}

//2
function solution(n) {
  let a = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill());
  let row = -1;
  let col = 0;
  let fill = 0;
  for (let i = n; i > 0; i -= 3) {
    a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill;
    for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill;
  }
  return a.flat();
}
