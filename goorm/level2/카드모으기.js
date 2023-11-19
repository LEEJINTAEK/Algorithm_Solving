function solution(n, nums) {
  const check = new Set();
  for (let i = 0; i < nums.length; i++) {
    check.add(nums[i]);
    if (check.size === Number(n)) {
      return i + 1;
    }
  }
  return -1;
}

const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let [n, m] = [null, null];
  const data = [];
  let count = 0;
  for await (const line of rl) {
    if (!n && !m) {
      [n, m] = line.split(" ");
    } else {
      data.push(Number(line));
      count += 1;
    }
    if (count === Number(m)) {
      rl.close();
    }
  }
  console.log(solution(n, data));
  process.exit();
})();
