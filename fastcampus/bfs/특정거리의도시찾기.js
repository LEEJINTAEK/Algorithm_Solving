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

//
//
//파이썬

// from collections import deque

// n,m,k,x = map(int,input().split())
// graph = [[] for _ in range(n+1)]
// for _ in range(m):
//   a,b = map(int, input().split())
//   graph[a].append(b)

// q = deque([x])
// check = [-1] * (n + 1)
// check[x] = 0

// while q:
//   cur = q.popleft()

//   for next in graph[cur]:
//       if check[next] != -1:
//         continue
//       check[next] = check[cur] + 1
//       q.append(next)

// answer =  ''

// for i in range(1, n+1):
//    if check[i] == k:
//       answer += str(i) + '\n'

// if answer == '':
//    print(-1)
// else:
//    print(answer.strip())
