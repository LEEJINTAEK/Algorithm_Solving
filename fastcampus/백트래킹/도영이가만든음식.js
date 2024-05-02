const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4", "1 7", "2 6", "3 8", "4 9"];
const n = Number(input[0]);
const ingredient = [];
for (let i = 1; i <= n; i++) {
  ingredient.push(input[i].split(" ").map(Number));
}
let min = Number.MAX_SAFE_INTEGER;

function dfs(cur, sourness, bitters) {
  if (cur > 0) {
    const cal = Math.abs(sourness - bitters);
    min = Math.min(min, cal);
  }
  for (let i = cur; i < n; i++) {
    dfs(i + 1, sourness * ingredient[i][0], bitters + ingredient[i][1]);
  }
}
dfs(0, 1, 0);
console.log(min);

//
//
//파이썬
// n = int(input())
// ingredient = []
// for _ in range(n):
//   ingredient.append(list(map(int, input().split())))

// answer = float('inf')

// def dfs(cur,s,b):
//   global answer
//   if cur > 0:
//     cal = abs(s-b)
//     answer = min(cal, answer)
//   for i in range(cur, n):
//     dfs(i + 1, s * ingredient[i][0], b + ingredient[i][1])

// dfs(0,1,0)

// print(answer)
