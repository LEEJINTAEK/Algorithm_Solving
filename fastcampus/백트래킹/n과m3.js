const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["3 3"];
const [n, m] = input[0].split(" ").map(Number);
const answer = [];

function dfs(depth, arr) {
  if (arr.length === m) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    dfs(depth, [...arr, i]);
  }
}

for (let i = 1; i <= n; i++) {
  dfs(i, [i]);
}
console.log(answer.join("\n"));
