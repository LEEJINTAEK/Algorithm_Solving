const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5", "7", "3 8", "8 1 0", "2 7 4 4", "4 5 2 6 5"];
const n = Number(input[0]);
const dp = Array.from({ length: n }, (_, i) => Array(i).fill(0));
dp.push(input[n].split(" ").map(Number));

for (let i = n - 1; i > 0; i--) {
  const data = input[i].split(" ").map(Number);

  for (let j = 0; j < data.length; j++) {
    dp[i][j] = Math.max(data[j] + dp[i + 1][j], data[j] + dp[i + 1][j + 1]);
  }
}
console.log(dp[1][0]);

//
//
//파이썬

// n = int(input())
// data = [list(map(int,input().split())) for _ in range(n-1)]
// dp = [[0]*i for i in range(1, n)]
// dp.append(list(map(int,input().split())))

// for i in range(n-2, -1, -1):
//     for j in range(i, -1, -1):
//         dp[i][j] = max(data[i][j] + dp[i+1][j], data[i][j] + dp[i+1][j+1])

// print(dp[0][0])
