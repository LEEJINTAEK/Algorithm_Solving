const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");
// const input = ["4 4 2 1", "1 2", "1 3", "2 3", "2 4"];
const [n, m, k, x] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}
const check = Array.from({ length: n + 1 }, () => -1);
const queue = [x];
check[x] = 0;

let a = 0;
while (a < queue.length) {
  //시간초과 때문에 shift() 사용 X
  const node = queue[a];

  for (const nextNode of graph[node]) {
    if (check[nextNode] === -1) {
      check[nextNode] = check[node] + 1;
      queue.push(nextNode);
    }
  }
  a += 1;
}

let success = false;

for (let i = 1; i <= n; i++) {
  if (check[i] === k) {
    console.log(i);
    success = true;
  }
}

if (!success) {
  console.log(-1);
}
