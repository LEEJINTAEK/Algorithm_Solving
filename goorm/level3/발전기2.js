//bfs
function solution(arr, n, k) {
  const check = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );
  const dy = [0, 0, -1, 1];
  const dx = [1, -1, 0, 0];
  const score = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const queue = [[i, j]];
      let cnt = 1;
      check[i][j] = true;
      while (queue.length) {
        const [row, col] = queue.shift();
        for (let k = 0; k < dx.length; k++) {
          const [ny, nx] = [row + dy[k], col + dx[k]];
          if (ny < 0 || nx < 0 || ny >= n || nx >= n || check[ny][nx]) {
            continue;
          }
          if (arr[ny][nx] === arr[row][col]) {
            check[ny][nx] = true;
            queue.push([ny, nx]);
            cnt += 1;
          }
        }
      }
      if (cnt >= k) {
        score.set(arr[i][j], score.get(arr[i][j]) + 1 || 1);
      }
    }
  }

  const answer = [...score].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  return answer[0][0];
}

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
let cnt = 0;
let n, k;
rl.on("line", (line) => {
  if (cnt === 0) {
    [n, k] = line.split(" ").map(Number);
  } else if (cnt <= n) {
    input.push(line.split(" ").map(Number));
  } else {
    rl.close();
  }
  cnt += 1;
});

rl.on("close", () => {
  console.log(solution(input, n, k));
});

// dfs 런타임 에러
function solution(arr, n, k) {
  const check = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );
  const dy = [0, 0, -1, 1];
  const dx = [1, -1, 0, 0];
  function dfs(row, col) {
    let cnt = 1;
    for (let i = 0; i < dx.length; i++) {
      const [ny, nx] = [row + dy[i], col + dx[i]];
      if (ny < 0 || nx < 0 || ny >= n || nx >= n || check[ny][nx]) {
        continue;
      }
      if (arr[row][col] === arr[ny][nx]) {
        check[ny][nx] = true;
        cnt += dfs(ny, nx);
      }
    }
    return cnt;
  }
  const score = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      check[i][j] = true;
      if (dfs(i, j) >= k) {
        score.set(arr[i][j], score.get(arr[i][j]) + 1 || 1);
      }
    }
  }

  const answer = [...score].sort((a, b) => b[1] - a[1] || b[0] - a[0]);

  return answer[0][0];
}
