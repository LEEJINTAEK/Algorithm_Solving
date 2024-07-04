//bfs
function solution(n, arr) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const queue = [[i, j]];
      let possible = false;
      while (queue.length) {
        const [row, col] = queue.shift();
        if (row < 0 || col < 0 || row >= n || col >= n) {
          continue;
        }
        if (arr[row][col] !== 1) {
          continue;
        }
        arr[row][col] -= 1;
        for (let k = 0; k < dx.length; k++) {
          const [ny, nx] = [row + dy[k], col + dx[k]];
          queue.push([ny, nx]);
        }
        possible = true;
      }
      if (possible) {
        answer += 1;
      }
    }
  }

  return answer;
}

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let cnt = 0;
let n;
rl.on("line", (line) => {
  if (cnt === 0) {
    n = Number(line);
  } else if (cnt <= n) {
    input.push(line.split(" ").map(Number));
  } else {
    rl.close();
  }
  cnt += 1;
});

rl.on("close", () => {
  console.log(solution(n, input));
});

// dfs 런타임 에러
function solution(n, arr) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= n || col >= n) {
      return false;
    }
    if (arr[row][col] === 1) {
      arr[row][col] -= 1;
      for (let i = 0; i < dx.length; i++) {
        const [ny, nx] = [row + dy[i], col + dx[i]];
        dfs(ny, nx);
      }
      return true;
    }
    return false;
  };

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j)) {
        answer += 1;
      }
    }
  }

  return answer;
}
