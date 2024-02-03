const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = [
//   "7 7",
//   "2 0 0 0 1 1 0",
//   "0 0 1 0 1 2 0",
//   "0 1 1 0 1 0 0",
//   "0 1 0 0 0 0 0",
//   "0 0 0 0 0 1 1",
//   "0 1 0 0 0 0 0",
//   "0 1 0 0 0 0 0",
// ];

const [n, m] = input[0].split(" ").map(Number);
const data = [];
const curMap = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  data.push(line);
  curMap.push(Array(m).fill(0));
}

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
let answer = 0;

function virus(row, col) {
  for (let i = 0; i < dx.length; i++) {
    const [nx, ny] = [col + dx[i], row + dy[i]];
    if (nx < 0 || ny < 0 || nx >= m || ny >= n) {
      continue;
    }
    if (curMap[ny][nx] === 0) {
      curMap[ny][nx] = 2;
      virus(ny, nx);
    }
  }
}

function dfs(cnt) {
  if (cnt === 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        curMap[i][j] = data[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (curMap[i][j] === 2) {
          virus(i, j);
        }
      }
    }
    const safeZone = curMap.flat().filter((x) => x === 0).length;
    answer = Math.max(answer, safeZone);
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (data[i][j] === 0) {
        data[i][j] = 1;
        dfs(cnt + 1);
        data[i][j] = 0;
      }
    }
  }
}

dfs(0);
console.log(answer);
