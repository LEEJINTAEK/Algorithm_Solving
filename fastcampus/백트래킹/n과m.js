let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 2"];
const [n, m] = input[0].split(" ").map(Number);

const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
const visited = new Array(n).fill(false);
const selected = [];
const answer = "";
function dfs(arr, depth) {
  if (depth == m) {
    const result = [];
    for (let i of selected) {
      result.push(arr[i]);
    }
    for (let x of result) {
      answer += x + " ";
    }
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) {
      continue;
    }
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0);
console.log(answer);

// const answer = [];
// const check = Array.from({ length: n + 1 }, () => false);

// function dfs(depth, arr) {
//   if (depth > n || arr.length > m) {
//     return;
//   }
//   if (arr.length === m) {
//     answer.push(arr);
//     return;
//   }
//   for (let i = 1; i <= n; i++) {
//     if (!check[i]) {
//       check[i] = true;
//       dfs(depth, [...arr, i]);
//       check[i] = false;
//     }
//   }
// }
// for (let d = 1; d <= n; d++) {
//   check[d] = true;
//   dfs(d, [d]);
//   check[d] = false;
// }

// console.log(answer.map((num) => num.join(" ")).join("\n"));

//
//
//파이썬
// n,m = map(int, input().split())

// def dfs(arr):
//     if len(arr) == m:
//         print(' '.join(map(str, arr)))
//         return
//     for i in range(1, n+1):
//         if i not in arr:
//             arr.append(i)
//             dfs(arr)
//             arr.pop()
// dfs([])
