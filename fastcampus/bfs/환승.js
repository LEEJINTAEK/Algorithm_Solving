// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["9 3 5", "1 2 3", "1 4 5", "3 6 7", "5 6 7", "6 8 9"];
const [N, K, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + M + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const data = input[i].split(" ").map(Number);
  for (const x of data) {
    const hyfer = N + i;
    graph[x].push(hyfer);
    graph[hyfer].push(x);
  }
}
let possible = false;
const check = new Set([1]);
const queue = [[1, 1]];

while (queue.length) {
  const [node, cnt] = queue.shift();

  if (node === N) {
    console.log(parseInt(cnt / 2) + 1);
    possible = true;
    break;
  }

  for (const next of graph[node]) {
    if (!check.has(next)) {
      queue.push([next, cnt + 1]);
      check.add(next);
    }
  }
}

if (!possible) {
  console.log(-1);
}
