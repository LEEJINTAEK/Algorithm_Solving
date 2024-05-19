const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const distance = input[1].split(" ").map(Number);
const fee = input[2].split(" ").map(Number);

function solution(n, distance, fee) {
  const priority = Array.from({ length: n }, () => 0);
  priority[0] = fee[0];

  for (let i = 1; i < n; i++) {
    priority[i] = Math.min(fee[i], priority[i - 1]);
  }
  let sum = BigInt(0);

  for (let i = 0; i < n - 1; i++) {
    sum += BigInt(priority[i]) * BigInt(distance[i]);
  }

  return String(sum);
}

console.log(solution(n, distance, fee));

//
//
//파이썬

// n = int(input())
// distance = list(map(int, input().split()))
// fee = list(map(int, input().split()))

// prior = [0] * n
// prior[0] = fee[0]
// for i in range(1, n):
//     prior[i] = min(prior[i-1], fee[i])

// answer = 0
// for i in range(n-1):
//     answer += distance[i] * prior[i]

// print(answer)
