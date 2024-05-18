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

//
//
//파이썬

// n, m = map(int, input().split())
// adj = [[] for _ in range(n+1)]
// for _ in range(n-1):
//     a,b,c = map(int, input().split())
//     adj[a].append({'dest': b, 'cost': c})
//     adj[b].append({'dest': a, 'cost': c})

// check = [0]*(n+1)

// def dfs(cur, end, total):
//     if cur == end:
//         print(total)
//         return

//     for next in adj[cur]:
//         if check[next['dest']] == 1:
//             continue

//         check[next['dest']] = 1
//         dfs(next['dest'], end, total + next['cost'])
//         check[next['dest']] = 0

// for _ in range(m):
//     x,y = map(int,input().split())
//     check[x] = 1
//     dfs(x,y,0)
//     check[x] = 0
