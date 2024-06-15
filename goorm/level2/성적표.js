function solution(test) {
  const testSort = new Map();
  const testCnt = new Map();
  for (const [number, score] of test) {
    testSort.set(number, testSort.get(number) + score || score);
    testCnt.set(number, testCnt.get(number) + 1 || 1);
  }
  let maxAvg = 0;
  let maxNumber = 0;
  for (const number of testSort.keys()) {
    const curAvg = testSort.get(number) / testCnt.get(number);
    if (maxAvg === curAvg) {
      maxNumber = Math.min(maxNumber, number);
    }
    if (maxAvg < curAvg) {
      maxNumber = number;
      maxAvg = curAvg;
    }
  }

  return maxNumber;
}

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n = 0,
    m = 0;
  let idx = 0;
  const test = [];
  for await (const line of rl) {
    if (idx === 0) {
      [n, m] = line.split(" ").map(Number);
    }
    if (idx >= 1 && idx <= n) {
      test.push(line.split(" ").map(Number));
    }
    idx += 1;
    if (idx > n) {
      rl.close();
    }
  }
  console.log(solution(test));
  process.exit();
})();
