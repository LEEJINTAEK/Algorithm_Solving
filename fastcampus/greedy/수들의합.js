let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
s = Number(input[0]);

function solution(s) {
  let sum = 0;
  let cur = 0;
  while (sum <= s) {
    cur += 1;
    sum += cur;
  }

  return cur - 1;
}

console.log(solution(s));

//
//
//파이썬
// n = int(input())
// total = 0
// cur = 1
// while total<=n:
//     total += cur
//     cur += 1
// print(cur-2)
