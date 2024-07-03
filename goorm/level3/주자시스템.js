//런타임 에러
function solution(N, M, arr) {
  const check = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  function dfs(row, col) {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    if (
      row < 0 ||
      col < 0 ||
      row >= N ||
      col >= M ||
      check[row][col] ||
      arr[row][col] === 1
    ) {
      return 0;
    }

    check[row][col] = true;

    let score = arr[row][col] === 2 ? -2 : 1;
    for (let i = 0; i < dx.length; i++) {
      score += dfs(row + dy[i], col + dx[i]);
    }
    return score;
  }
  let maxScore = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      maxScore = Math.max(maxScore, dfs(i, j));
    }
  }
  console.log(maxScore);
}

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n, m;
  let idx = 0;
  const input = [];
  for await (const line of rl) {
    if (idx === 0) {
      [n, m] = line.split(" ").map(Number);
    } else if (idx <= n) {
      input.push(line.split(" ").map(Number));
    } else {
      rl.close();
    }
    idx += 1;
  }
  solution(n, m, input);
  process.exit();
})();
