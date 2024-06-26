// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = [
  "3",
  "8",
  "0 0",
  "7 0",
  "100",
  "0 0",
  "30 50",
  "10",
  "1 1",
  "1 1",
];
const testCase = Number(input[0]);
let start = 1;
for (let test = 1; test <= testCase; test++) {
  const data = [];
  for (let line = start; line < start + 3; line++) {
    data.push(input[line].split(" ").map(Number));
  }
  const n = Number(data[0]);
  const [sRow, sCol] = data[1];
  const [eRow, eCol] = data[2];
  //풀이
  const queue = [[sRow, sCol, 0]];
  const cX = [-1, 1, -1, 1];
  const cY = [1, 1, -1, -1];
  const dX = [
    [0, -1],
    [0, 1],
    [0, -1],
    [0, 1],
  ];
  const dY = [
    [1, 0],
    [1, 0],
    [-1, 0],
    [-1, 0],
  ];
  const check = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  while (queue.length) {
    const [row, col, cnt] = queue.shift();
    check[row][col] = true;

    if (row === eRow && col === eCol) {
      console.log(cnt);
      break;
    }

    for (let i = 0; i < cX.length; i++) {
      for (let j = 0; j < dX[i].length; j++) {
        const [nX, nY] = [col + cX[i] + dX[i][j], row + cY[i] + dY[i][j]];
        if (nX < 0 || nY < 0 || nX >= n || nY >= n) {
          continue;
        }
        if (!check[nY][nX]) {
          check[nY][nX] = true;
          queue.push([nY, nX, cnt + 1]);
        }
      }
    }
  }

  start += 3;
}

//
//
//파이썬

// from collections import deque

// test_case = int(input())
// for test in range(test_case):
//   n = int(input())
//   check = [[0] * n for _ in range(n)]
//   sR, sC = map(int, input().split())
//   tR, tC = map(int, input().split())
//   q = deque([[sR, sC, 0]])

//   while q:
//     cR, cC, cnt = q.popleft()

//     if cR == tR and cC == tC:
//       print(cnt)
//       break

//     if cR < 0 or cC < 0 or cR >= n or cC >= n:
//       continue
//     if check[cR][cC] == 1:
//       continue

//     check[cR][cC] = 1
//     q.append([cR-2, cC-1 ,cnt+1])
//     q.append([cR-1, cC-2 ,cnt+1])
//     q.append([cR-1, cC+2 ,cnt+1])
//     q.append([cR-2, cC+1 ,cnt+1])
//     q.append([cR+2, cC-1 ,cnt+1])
//     q.append([cR+1, cC-2 ,cnt+1])
//     q.append([cR+2, cC+1 ,cnt+1])
//     q.append([cR+1, cC+2 ,cnt+1])
