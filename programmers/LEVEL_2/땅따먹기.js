// DP
function solution1(land) {
  const dp = Array.from({ length: land.length }, () => Array(4).fill(0));
  //첫 줄
  for (let i = 0; i < 4; i++) {
    dp[0][i] = land[0][i];
  }

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] + land[i][j]);
        }
      }
    }
  }

  return Math.max(...dp[land.length - 1]);
}

function solution2(land) {
  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}

// //DFS 풀이 => 오답!!!
// function solution(land) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   function dfs(row, col, sum) {
//     if (row === land.length) {
//       return sum;
//     }
//     let maxSum = 0;
//     for (let i = 0; i < 4; i++) {
//       if (i !== col) {
//         maxSum = Math.max(maxSum, dfs(row + 1, i, sum + land[row][i]));
//       }
//     }
//     return maxSum;
//   }
//   for (let i = 0; i < 4; i++) {
//     answer = Math.max(answer, dfs(1, i, land[0][i]));
//   }
//   return answer;
// }
