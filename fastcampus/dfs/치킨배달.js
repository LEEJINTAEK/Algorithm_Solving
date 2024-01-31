// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = [
  "5 3",
  "0 0 1 0 0",
  "0 0 2 0 1",
  "0 1 2 0 0",
  "0 0 1 0 0",
  "0 0 0 0 2",
];

const [n, m] = input.shift().split(" ").map(Number);
const house = [];
const chicken = [];
for (let i = 0; i < n; i++) {
  const line = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] === 1) {
      house.push([i + 1, j + 1]);
    }
    if (line[j] === 2) {
      chicken.push([i + 1, j + 1]);
    }
  }
}
const check = Array.from({ length: chicken.length }, () => false);
const selected = [];

let answer = Number.MAX_SAFE_INTEGER;

function dfs(depth, start) {
  if (depth === m) {
    const result = [];
    for (const i of selected) {
      result.push(chicken[i]);
    }
    let sum = 0;
    for (const [hy, hx] of house) {
      let distance = Number.MAX_SAFE_INTEGER;
      for (const [cy, cx] of result) {
        distance = Math.min(distance, Math.abs(cy - hy) + Math.abs(cx - hx));
      }
      sum += distance;
    }

    answer = Math.min(answer, sum);
    return;
  }

  for (let i = start; i < chicken.length; i++) {
    if (!check[i]) {
      check[i] = true;
      selected.push(i);
      dfs(depth + 1, i + 1);
      check[i] = false;
      selected.pop();
    }
  }
}
dfs(0, 0);
console.log(answer);
