const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["3 3", "1 0 2", "0 0 0", "3 0 0", "1 2 2"];

const [n, k] = input[0].split(" ").map(Number);
const [s, y, x] = input[n + 1].split(" ").map(Number);
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const data = [];
const map = [];
for (let i = 1; i <= n; i++) {
  const line = input[i].split(" ").map(Number);
  map.push(line);
  for (let j = 0; j < n; j++) {
    if (line[j] !== 0) {
      data.push([line[j], i - 1, j, 0]);
    }
  }
}
data.sort((a, b) => a[0] - b[0]);

while (data.length) {
  const [virus, row, col, time] = data.shift();
  if (time === s) {
    break;
  }

  for (let i = 0; i < dx.length; i++) {
    const [nx, ny] = [col + dx[i], row + dy[i]];
    if (ny < 0 || nx < 0 || ny >= n || nx >= n) {
      continue;
    }
    if (map[ny][nx] === 0) {
      map[ny][nx] = virus;
      data.push([virus, ny, nx, time + 1]);
    }
  }
}

console.log(map[y - 1][x - 1]);

//
//
//파이썬

// from collections import deque
// n, k = map(int,input().split())
// data = []
// check = []
// for i in range(n):
//   row = list(map(int, input().split()))
//   check.append(row)
//   for j in range(n):
//     if row[j] != 0:
//       data.append([row[j], i, j, 0])

// data.sort(key=lambda x: x[0])
// q = deque(data)
// s, x, y = map(int, input().split())
// dy = [0,0,1,-1]
// dx = [1,-1,0,0]
// while q:
//   virus, r, c, time = q.popleft()

//   if time == s:
//     break

//   for i in range(4):
//     ny, nx = r + dy[i], c + dx[i]
//     if ny < 0 or nx < 0 or ny >= n or nx >= n or check[ny][nx] !=0:
//       continue
//     check[ny][nx] = virus
//     q.append([virus, ny, nx, time+1])

// print(check[x-1][y-1])
