const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = [
//   "8 9",
//   "0 0 0 0 0 0 0 0 0",
//   "0 0 0 1 1 0 0 0 0",
//   "0 0 0 1 1 0 1 1 0",
//   "0 0 1 1 1 1 1 1 0",
//   "0 0 1 1 1 1 1 0 0",
//   "0 0 1 1 0 1 1 0 0",
//   "0 0 0 0 0 0 0 0 0",
//   "0 0 0 0 0 0 0 0 0",
// ];
const [n, m] = input[0].split(" ").map(Number);
const data = [];
for (let i = 1; i <= n; i++) {
  data.push(input[i].split(" ").map(Number));
}
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function bfs() {
  const check = Array.from({ length: n }, () => Array(m).fill(false));
  check[0][0] = true;
  const queue = [[0, 0]];

  while (queue.length) {
    const [row, col] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const [nextRow, nextCol] = [row + dy[i], col + dx[i]];
      if (nextCol < 0 || nextRow < 0 || nextCol >= m || nextRow >= n) {
        continue;
      }
      if (!check[nextRow][nextCol]) {
        if (data[nextRow][nextCol] >= 1) {
          data[nextRow][nextCol] += 1;
        } else {
          queue.push([nextRow, nextCol]);
          check[nextRow][nextCol] = true;
        }
      }
    }
  }
}

function melt() {
  let finish = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (data[i][j] >= 3) {
        data[i][j] = 0;
        finish = false;
      }
      if (data[i][j] === 2) {
        data[i][j] = 1;
      }
    }
  }

  return finish;
}

let time = 0;

while (1) {
  bfs();
  if (melt()) {
    console.log(time);
    break;
  }
  time += 1;
}
