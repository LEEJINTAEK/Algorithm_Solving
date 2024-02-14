const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");
// const input = ["3", "NYY", "YNY", "YYN"];
const INF = 1e9;
const n = Number(input[0]);

const graph = [Array(n + 1).fill(INF)];
for (let i = 1; i <= n; i++) {
  graph.push(Array(n + 1).fill(INF));
  const line = input[i].split("");
  for (let j = 0; j < n; j++) {
    if (line[j] === "Y") {
      graph[i][j + 1] = 1;
    }
  }
  graph[i][i] = 0;
}

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const cost = graph[a][k] + graph[k][b];
      if (graph[a][b] > cost) {
        graph[a][b] = cost;
      }
    }
  }
}

const friends = Array(n + 1).fill(0);
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    if (a !== b && graph[a][b] <= 2) {
      friends[a] += 1;
    }
  }
}

console.log(Math.max(...friends));
