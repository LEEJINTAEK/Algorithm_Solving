const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4", "1 7", "2 6", "3 8", "4 9"];
const n = Number(input[0]);
const ingredient = [];
for (let i = 1; i <= n; i++) {
  ingredient.push(input[i].split(" ").map(Number));
}
ingredient;
let min = Number.MAX_SAFE_INTEGER;

function dfs(cur, sourness, bitters) {
  if (cur > 0) {
    const cal = Math.abs(sourness - bitters);
    min = Math.min(min, cal);
  }
  for (let i = cur; i < n; i++) {
    dfs(i + 1, sourness * ingredient[i][0], bitters + ingredient[i][1]);
  }
}
dfs(0, 1, 0);
console.log(min);
