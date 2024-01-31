// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = [
  "7",
  "0110100",
  "0110101",
  "1110101",
  "0000111",
  "0100000",
  "0111110",
  "0111000",
];

const n = Number(input.shift());
const map = input.map((x) => x.split("").map(Number));
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function dfs(row, col) {
  if (row < 0 || col < 0 || row >= n || col >= n) {
    return 0;
  }
  if (map[row][col] >= 1) {
    map[row][col] -= 1;
    let result = 1;
    for (let i = 0; i < dx.length; i++) {
      const [nextRow, nextCol] = [row + dy[i], col + dx[i]];
      result += dfs(nextRow, nextCol);
    }
    return result;
  }
  return 0;
}
const answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let count = dfs(i, j);
    if (count > 0) {
      answer.push(count);
    }
  }
}

answer.sort((a, b) => a - b);
console.log(`${answer.length}\n${answer.join("\n")}`);
