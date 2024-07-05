// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = [
  "2",
  "10 8 17",
  "0 0",
  "1 0",
  "1 1",
  "4 2",
  "4 3",
  "4 5",
  "2 4",
  "3 4",
  "7 4",
  "8 4",
  "9 4",
  "7 5",
  "8 5",
  "9 5",
  "7 6",
  "8 6",
  "9 6",
  "10 10 1",
  "5 5",
];
const testCase = Number(input[0]);
let start = 1;

for (let test = 1; test <= testCase; test++) {
  const [m, n, k] = input[start].split(" ").map(Number);

  console.log(solution(m, n, k));

  start += k + 1;
}

function solution(m, n, k) {
  //배추 map 생성
  const map = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  for (let i = start + 1; i <= k + start; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    map[b][a] = 1;
  }

  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const queue = [[i, j]];
      let possible = false;
      while (queue.length) {
        const [row, col] = queue.shift();
        if (row < 0 || col < 0 || row >= n || col >= m) {
          continue;
        }
        if (map[row][col] !== 1) {
          continue;
        }
        map[row][col] -= 1;
        possible = true;
        for (let k = 0; k < dx.length; k++) {
          const [ny, nx] = [row + dy[k], col + dx[k]];
          queue.push([ny, nx]);
        }
      }
      if (possible) {
        cnt += 1;
      }
    }
  }

  return cnt;
}
