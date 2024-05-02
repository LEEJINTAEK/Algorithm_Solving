// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["3 6", "HFDFFB", "AJHGDH", "DGAGEH"];
// const input = ["5 5", "IEFCJ", "FHFKC", "FFALF", "HFGCF", "HMCHH"];
// const input = ["2 4", "CAAB", "ADCB"];

const [R, C] = input.shift().split(" ").map(Number);

const check = new Set();
let answer = Number.MIN_SAFE_INTEGER;

function dfs(row, col, cnt) {
  answer = Math.max(cnt, answer);

  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  //상하좌우 한 칸
  for (let i = 0; i < dx.length; i++) {
    const [x, y] = [col + dx[i], row + dy[i]];

    if (y < 0 || y >= R || x < 0 || x >= C) {
      continue;
    }

    if (check.has(input[y][x])) {
      continue;
    }

    check.add(input[y][x]);
    dfs(y, x, cnt + 1);
    check.delete(input[y][x]);
  }
}

check.add(input[0][0]);
dfs(0, 0, 1);

console.log(answer);

//
//
//파이썬

// r,c = map(int, input().split())
// input_map = []
// for _ in range(r):
//   input_map.append(input())

// dx = [0,0,-1,1]
// dy = [1,-1,0,0]
// check = set()
// check.add(input_map[0][0])
// answer = 0

// def dfs(row,col,cnt):

//   global answer
//   answer = max(answer,cnt)

//   for i in range(4):

//     ny,nx = row + dy[i], col + dx[i]
//     if ny < 0 or nx < 0 or ny >= r or nx >= c:
//       continue

//     next = input_map[ny][nx]

//     if next in check:
//       continue

//     check.add(next)
//     dfs(ny,nx,cnt+1)
//     check.remove(next)

// dfs(0,0,1)
// print(answer)
