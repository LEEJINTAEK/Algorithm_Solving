const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["7", "6", "1 2", "2 3", "1 5", "5 2", "5 6", "4 7"];
const n = Number(input.shift());
const m = Number(input.shift());
const data = input.map((x) => x.split(" ").map(Number));
const adj = Array.from({ length: n + 1 }, () => []);
const check = Array.from({ length: n + 1 }, () => 0);
for (let i = 0; i < m; i++) {
  const [a, b] = data[i];
  adj[a].push(b);
  adj[b].push(a);
}

function dfs(cur) {
  for (const next of adj[cur]) {
    if (check[next] === 0) {
      check[next] = 1;
      dfs(next);
    }
  }
}
let answer = 1;
check[1] = 1;
dfs(1);
console.log(check.filter((x) => x !== 0).length - 1);
