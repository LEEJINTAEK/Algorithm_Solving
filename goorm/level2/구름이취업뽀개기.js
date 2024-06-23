function solution(problem, level) {
  level.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let pre_k = 0;
  let pre_t = 0;
  let sum = 0;
  for (const [k, t] of level) {
    if (problem[k - 1] > 0) {
      if (sum !== 0 && pre_k === k) {
        sum += t - pre_t;
      }
      if (sum !== 0 && pre_k < k) {
        sum += 60;
      }
      sum += t;
      problem[k - 1] -= 1;
      pre_k = k;
      pre_t = t;
    }
  }

  console.log(sum);
}

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n;
  let problem;
  let cnt = 1;
  const level = [];
  for await (const line of rl) {
    if (!n) {
      n = Number(line);
      continue;
    }
    if (!problem) {
      problem = line.split(" ").map(Number);
      continue;
    }
    if (cnt <= n) {
      level.push(line.split(" ").map(Number));
    }
  }

  solution(problem, level);
  process.exit();
})();
