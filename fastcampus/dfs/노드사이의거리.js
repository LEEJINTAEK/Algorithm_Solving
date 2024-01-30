const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 2", "2 1 2", "4 3 2", "1 4 3", "1 2", "3 2"];
const [n, m] = input[0].split(" ").map(Number);
const adj = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < n; i++) {
  const [a, b, cost] = input[i].split(" ").map(Number);
  adj[a].push({ destination: b, cost });
  adj[b].push({ destination: a, cost });
}

const check = Array.from({ length: n + 1 }, () => false);

function dfs(start, end, cost) {
  if (start === end) {
    console.log(cost);
    return;
  }

  for (let i = 0; i < adj[start].length; i++) {
    const [next, nextCost] = [
      adj[start][i].destination,
      cost + adj[start][i].cost,
    ];
    if (!check[next]) {
      check[next] = true;
      dfs(next, end, nextCost);
      check[next] = false;
    }
  }
}

for (let i = n; i < n + m; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  check[start] = true;
  dfs(start, end, 0);
  check[start] = false;
}
