// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["6", "20 1 15 8 4 10"];
const n = Number(input[0]);
const data = input[1].split(" ").map(Number);
const check = Array.from({ length: n }, () => false);
let answer = 0;

function cal(arr) {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}

function dfs(tmp) {
  if (tmp.length === n) {
    answer = Math.max(answer, cal(tmp));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!check[i]) {
      check[i] = true;
      dfs([...tmp, data[i]]);
      check[i] = false;
    }
  }
}

for (let i = 0; i < n; i++) {
  check[i] = true;
  dfs([data[i]]);
  check[i] = false;
}

console.log(answer);

//
//
//파이썬

// from itertools import permutations

// n = int(input())
// arr = list(map(int, input().split()))
// answer = 0
// for permutation in permutations(arr, n):
//     total = 0
//     for i in range(n-1):
//         total += abs(permutation[i] - permutation[i+1])
//     answer = max(answer, total)

// print(answer)
