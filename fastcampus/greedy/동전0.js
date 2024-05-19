const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0].split(" ")[0]); // 동전의 개수
let k = Number(input[0].split(" ")[1]); // 만들어야 할 금액

const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => b - a);
let cnt = 0;

for (const coin of arr) {
  cnt += Math.floor(k / coin);
  k = k % coin;
}

console.log(cnt);

//
//
//파이썬

// n, k = map(int, input().split())
// coin = [int(input()) for _ in range(n)]
// coin.sort(reverse=True)
// answer = 0
// for c in coin:
//     if c > k:
//         continue
//     answer += k // c
//     k = k % c

// print(answer)
