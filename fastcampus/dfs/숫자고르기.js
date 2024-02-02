const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["7", "3", "1", "1", "5", "5", "4", "6"];
const n = Number(input.shift());
const graph = [0, ...input.map(Number)];
const visited = Array.from({ length: n + 1 }, () => false);
const finished = Array.from({ length: n + 1 }, () => false);
const result = [];

function dfs(cur) {
  visited[cur] = true;
  let next = graph[cur];
  if (!visited[next]) {
    dfs(next);
  }
  if (visited[next] && !finished[next]) {
    while (cur !== next) {
      result.push(next);
      next = graph[next];
    }
    result.push(cur);
  }

  finished[cur] = true;
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
  }
}

result.sort((a, b) => a - b);
console.log(`${result.length}\n${result.join("\n")}`);
