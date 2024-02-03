const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5", "RRRBB", "GGBBB", "BBBRR", "BBRRR", "RRRRR"];
const n = Number(input.shift());
const check1 = Array.from({ length: n }, () => Array(n).fill(false));
const check2 = Array.from({ length: n }, () => Array(n).fill(false));

let [colorWeakness, notColorWeakness] = [0, 0];
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function dfs(row, col, check, compare) {
  if (!check[row][col]) {
    check[row][col] = true;
    for (let i = 0; i < dx.length; i++) {
      const [nx, ny] = [col + dx[i], row + dy[i]];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
        continue;
      }
      const [color, nextColor] = [input[row][col], input[ny][nx]];
      if (compare(color, nextColor)) {
        dfs(ny, nx, check, compare);
      }
    }
    return true;
  }
  return false;
}

const compareWeakness = (color, nextColor) =>
  color === nextColor ||
  (color === "R" && nextColor === "G") ||
  (color === "G" && nextColor === "R");
const compareNonWeakness = (color, nextColor) => color === nextColor;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, check1, compareWeakness)) {
      colorWeakness += 1;
    }
    if (dfs(i, j, check2, compareNonWeakness)) {
      notColorWeakness += 1;
    }
  }
}

console.log(`${notColorWeakness} ${colorWeakness}`);
