const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(str) {
  const groups = str.split("-");
  let acc = 0;
  for (let i = 0; i < groups.length; i++) {
    const cur = groups[i]
      .split("+")
      .map(Number)
      .reduce((a, c) => a + c, 0);
    if (i === 0) {
      acc += cur;
      continue;
    }
    acc -= cur;
  }

  return acc;
}

console.log(solution(input[0]));
