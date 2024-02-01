// const file = require("fs").readFileSync("/dev/stdin");
// const input = file.toString().split("\n");

const input = ["2", "7", "3 1 3 7 3 4 6", "8", "1 2 3 4 5 6 7 8"];

const testCase = Number(input[0]); // 테스트 케이스의 수
let line = 1;

for (let test = 1; test <= testCase; test++) {
  const n = Number(input[line]);
  const graph = [0, ...input[line + 1].split(" ").map(Number)];
  const visited = new Array(n + 1).fill(false);
  const finished = new Array(n + 1).fill(false);
  const result = [];

  function dfs(cur) {
    visited[cur] = true;
    let next = graph[cur];
    if (!visited[next]) {
      dfs(next);
    }
    if (visited[next] && !finished[next]) {
      while (next !== cur) {
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
  line += 2;
  console.log(n - result.length);
}
