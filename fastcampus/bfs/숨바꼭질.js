// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["5 17"];

const [n, k] = input[0].split(" ").map(Number);
const queue = [[n, 0]];
const MAX = 100001;
const check = Array.from({ length: MAX }, () => false);
check[n] = true;

while (queue.length) {
  const [cur, cnt] = queue.shift();
  if (cur === k) {
    console.log(cnt);
    return;
  }
  for (const next of [cur - 1, cur + 1, cur * 2]) {
    if (next < 0 || next > MAX) {
      continue;
    }
    if (!check[next]) {
      check[next] = true;
      queue.push([next, cnt + 1]);
    }
  }
}

//
//
//파이썬

// from collections import deque

// n,k = map(int, input().split())
// q = deque([(n,0)])
// check = set()

// while q:
//   cur,cnt = q.popleft()
//   if cur == k:
//     print(cnt)
//     break
//   if cur in check:
//     continue
//   if cur < 0 or cur >100000:
//     continue

//   check.add(cur)
//   q.append((cur-1, cnt+1))
//   q.append((cur+1, cnt+1))
//   q.append((cur*2, cnt+1))
