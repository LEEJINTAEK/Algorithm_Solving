let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const check = Array.from({ length: n + 1 }, () => false);

const answer = [];

function dfs(depth, arr) {
  if (arr.length === n) {
    answer.push(arr);
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!check[i]) {
      check[i] = true;
      dfs(depth, [...arr, i]);
      check[i] = false;
    }
  }
}

for (let i = 1; i <= n; i++) {
  check[i] = true;
  dfs(i, [i]);
  check[i] = false;
}

console.log(answer.map((x) => x.join(" ")).join("\n"));
