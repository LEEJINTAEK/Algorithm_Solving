const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const blockMap = [];
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

for (let i = 1; i <= N; i++) {
  blockMap.push(input[i].split("").map(Number));
}

const answer = [];

const isCycle = (curRow, curCol) => {
  if (curRow < 0 || curRow >= N || curCol < 0 || curCol >= N) {
    return false;
  }
  if (blockMap[curRow][curCol] === 1) {
    blockMap[curRow][curCol] -= 1;
    let cnt = 1;
    for (let i = 0; i < dx.length; i++) {
      const [nextRow, nextCol] = [curRow + dy[i], curCol + dx[i]];
      cnt += isCycle(nextRow, nextCol);
    }
    return cnt;
  }
  return false;
};
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const isCount = isCycle(i, j, 0);
    if (isCount > 0) {
      answer.push(isCount);
    }
  }
}
answer.sort((a, b) => a - b);
console.log([answer.length, ...answer].join("\n"));
