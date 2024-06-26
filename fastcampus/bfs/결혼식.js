const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["6", "5", "1 2", "1 3", "3 4", "2 3", "4 5"];
const n = Number(input[0]);
const m = Number(input[1]);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i <= m + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
const MAX = 2;
const check = new Set([1]);
const distance = Array.from({ length: n + 1 }, () => 0);
const queue = [1];
while (queue.length) {
  const node = queue.shift();

  for (const next of graph[node]) {
    if (!check.has(next)) {
      queue.push(next);
      check.add(next);
      distance[next] += distance[node] + 1;
    }
  }
}
let answer = 0;
for (let i = 1; i <= n; i++) {
  if (distance[i] <= 2 && distance[i] > 0) {
    answer += 1;
  }
}
console.log(answer);

//
//
//파이썬

// from collections import deque

// n = int(input())
// m = int(input())

// friends = [[] for _ in range(n+1)]

// for _ in range(m):
//   a,b = map(int, input().split())
//   friends[a].append(b)
//   friends[b].append(a)

// max_distance = 2
// q = deque([1])
// check = [-1] * (n+1)
// check[1] = 0

// while q:
//   cur = q.popleft()

//   for friend in friends[cur]:
//     if check[friend] != -1 :
//       continue
//     check[friend] = check[cur] + 1
//     q.append(friend)

// cnt = 0
// for d in check:
//   if d > 0 and d <= max_distance:
//     cnt +=1

// print(cnt)
