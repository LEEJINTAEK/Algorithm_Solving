const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const map = input.map((line) => line.split(" ").map(Number));

let answer = Infinity;

function calculateCost(heights) {
  heights.sort((a, b) => a - b);
  const medianHeight = heights[1];

  return heights.reduce(
    (cost, height) => cost + Math.abs(medianHeight - height),
    0
  );
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= 3 - 3; j++) {
    const heights = [map[i][j], map[i][j + 1], map[i][j + 2]];
    answer = Math.min(answer, calculateCost(heights));
  }
}

for (let i = 0; i <= 3 - 3; i++) {
  for (let j = 0; j < 3; j++) {
    const heights = [map[i][j], map[i + 1][j], map[i + 2][j]];
    answer = Math.min(answer, calculateCost(heights));
  }
}

console.log(answer);
