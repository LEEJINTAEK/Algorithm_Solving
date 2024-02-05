const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["3 3", "1 0 2", "0 0 0", "3 0 0", "1 2 2"];

const [n, k] = input[0].split(" ").map(Number);
const [s, y, x] = input[n + 1].split(" ").map(Number);
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const data = [];
const map = [];
for (let i = 1; i <= n; i++) {
  const line = input[i].split(" ").map(Number);
  map.push(line);
  for (let j = 0; j < n; j++) {
    if (line[j] !== 0) {
      data.push([line[j], i - 1, j, 0]);
    }
  }
}
data.sort((a, b) => a[0] - b[0]);

while (data.length) {
  const [virus, row, col, time] = data.shift();
  if (time === s) {
    break;
  }

  for (let i = 0; i < dx.length; i++) {
    const [nx, ny] = [col + dx[i], row + dy[i]];
    if (ny < 0 || nx < 0 || ny >= n || nx >= n) {
      continue;
    }
    if (map[ny][nx] === 0) {
      map[ny][nx] = virus;
      data.push([virus, ny, nx, time + 1]);
    }
  }
}

console.log(map[y - 1][x - 1]);
