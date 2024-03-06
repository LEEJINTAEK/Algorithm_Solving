const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");

// const input = ["2 3", "1 2 4", "8 16 32", "3", "1 1 2 3", "1 2 1 2", "1 3 2 3"];

const [n, m] = input[0].split(" ").map(Number);
const data = [Array(m + 1).fill(0)];
for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  data.push([0, ...arr]);
}
``;
const k = Number(input[n + 1]);
const queries = []; // 각 쿼리 정보 배열
for (let line = n + 2; line <= n + 1 + k; line++) {
  const [i, j, x, y] = input[line].split(" ").map(Number);
  queries.push([i, j, x, y]);
}

//구간합
const sum = [];
for (let i = 0; i <= n; i++) {
  sum.push(Array(m + 1).fill(0));
}
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    sum[i][j] = data[i][j] + sum[i][j - 1] + sum[i - 1][j] - sum[i - 1][j - 1];
  }
}

for (let index = 0; index < k; index++) {
  const [i, j, x, y] = queries[index];
  const current = sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1];
  console.log(current);
}
