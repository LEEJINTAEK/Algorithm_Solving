function check(data, i, j, n) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  let count = 0;

  for (let dir = 0; dir < 8; dir++) {
    let nx = i + dx[dir];
    let ny = j + dy[dir];

    if (nx >= 0 && nx < n && ny >= 0 && ny < n && data[nx][ny] === 1) {
      count += 1;
    }
  }

  return count;
}

function solution(n, k, data) {
  const goormMap = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (data[i][j] !== 1) {
        goormMap[i][j] = check(data, i, j, n);
      }
    }
  }

  return goormMap.flat(1).filter((x) => x === k).length;
}

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n, k;
const data = [];
rl.on("line", (line) => {
  if (!n && !k) {
    [n, k] = line.split(" ").map((x) => +x);
  } else if (data.length < n) {
    data.push(line.split(" ").map((x) => +x));
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  console.log(solution(n, k, data));
});
