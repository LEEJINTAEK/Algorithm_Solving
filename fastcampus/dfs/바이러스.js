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

function dfs(computer) {
  const total = check.reduce((a, b) => a + b, 0);
  answer = Math.max(total, answer);

  for (let i = 0; i < adj[computer].length; i++) {
    const nextComputer = adj[computer][i];
    if (check[nextComputer] === 0) {
      check[nextComputer] = 1;
      dfs(nextComputer);
    }
  }
}

let answer = 1;
check[1] = 1;
dfs(1);

console.log(answer - 1);

//
//
//파이썬

// n = int(input())
// m = int(input())
// graph = [[] for _ in range(n+1)]

// for _ in range(m):
//     a, b = map(int, input().split())
//     graph[a].append(b)
//     graph[b].append(a)

// check = [0] * (n+1)
// answer = 0
// check[1] = 1

// def dfs(cur):
//     global answer
//     answer = max(answer, sum(check))

//     for next in graph[cur]:
//         if check[next] == 1:
//             continue
//         check[next] = 1
//         dfs(next)

// dfs(1)

// print(answer-1)
