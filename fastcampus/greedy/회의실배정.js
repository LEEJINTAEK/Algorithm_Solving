const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = input[0];
const times = [];

for (let i = 1; i <= n; i++) {
  times.push(input[i].split(" ").map(Number));
}

function solution(n, times) {
  times.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let count = 1;
  let preTime = times[0][1];

  for (let i = 1; i < n; i++) {
    const [startTime, endTime] = times[i];
    if (preTime <= startTime) {
      preTime = endTime;
      count += 1;
    }
  }

  return count;
}

console.log(solution(n, times));
