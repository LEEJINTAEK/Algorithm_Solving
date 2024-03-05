const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");

// const input = [
//   "5",
//   "14",
//   "1 2 2",
//   "1 3 3",
//   "1 4 1",
//   "1 5 10",
//   "2 4 2",
//   "3 4 1",
//   "3 5 1",
//   "4 5 3",
//   "3 5 10",
//   "3 1 8",
//   "1 4 2",
//   "5 1 7",
//   "3 4 2",
//   "5 2 4",
// ];

const [n, m] = [Number(input[0]), Number(input[1])];
const INF = 1e9;
const graph = [Array(n + 1).fill(INF)];
for (let i = 1; i <= n; i++) {
  graph.push(Array(n + 1).fill(INF));
  graph[i][i] = 0;
}
for (let i = 2; i <= m + 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a][b] = Math.min(graph[a][b], c);
}

for (let i = 1; i <= n; i++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const cost = graph[a][i] + graph[i][b];
      if (cost < graph[a][b]) {
        graph[a][b] = cost;
      }
    }
  }
}

for (let i = 1; i <= n; i++) {
  const line = [];
  for (let j = 1; j <= n; j++) {
    if (graph[i][j] === INF) {
      line.push(0);
      continue;
    }
    line.push(graph[i][j]);
  }
  console.log(line.join(" "));
}
