const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = inputData[0].split(" ").map(Number);
const input = [];

for (let i = 1; i <= n; i++) {
  input.push(inputData[i].trim());
}

const ghost = [];
const user = [];
const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];
const ghostTime = Array.from({ length: n }, () => Array(m).fill(Infinity));
const check = Array.from({ length: n }, () => Array(m).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === "N") {
      check[i][j] = true;
      user.push([i, j, 0]);
    }
    if (input[i][j] === "G") {
      ghostTime[i][j] = 0;
      ghost.push([i, j, 0]);
    }
  }
}

while (ghost.length) {
  const [row, col, time] = ghost.shift();
  for (let i = 0; i < 4; i++) {
    const [nextRow, nextCol] = [row + dy[i], col + dx[i]];
    if (nextRow < 0 || nextCol < 0 || nextRow >= n || nextCol >= m) {
      continue;
    }
    if (ghostTime[nextRow][nextCol] > time + 1) {
      ghostTime[nextRow][nextCol] = time + 1;
      ghost.push([nextRow, nextCol, time + 1]);
    }
  }
}

let success = false;
while (user.length) {
  const [row, col, time] = user.shift();
  if (input[row][col] === "D") {
    success = true;
    break;
  }
  for (let i = 0; i < 4; i++) {
    const [nextRow, nextCol] = [row + dy[i], col + dx[i]];
    if (
      nextRow >= 0 &&
      nextCol >= 0 &&
      nextRow < n &&
      nextCol < m &&
      !check[nextRow][nextCol] &&
      input[nextRow][nextCol] !== "#" &&
      time + 1 < ghostTime[nextRow][nextCol]
    ) {
      user.push([nextRow, nextCol, time + 1]);
      check[nextRow][nextCol] = true;
    }
  }
}

if (success) {
  console.log("Yes");
} else {
  console.log("No");
}
