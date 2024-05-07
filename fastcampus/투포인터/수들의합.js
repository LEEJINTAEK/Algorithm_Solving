const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");
// const input = ["10 5", "1 2 3 4 2 5 3 1 1 2"];
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let rp = 0;
let sum = 0;
let answer = 0;
for (let lp = 0; lp < n; lp++) {
  while (sum < m && rp < n) {
    sum += arr[rp];
    rp += 1;
  }

  if (sum === m) {
    answer += 1;
  }
  sum -= arr[lp];
}

console.log(answer);

//
//
// 파이썬

// n, m = map(int, input().split())
// nums = list(map(int, input().split()))
// cal = 0
// answer =0
// r = 0
// for l in range(n):
//   while cal < m  and r < n:
//     cal += nums[r]
//     r += 1

//   if cal == m:
//     answer += 1

//   cal -= nums[l]

// print(answer)
