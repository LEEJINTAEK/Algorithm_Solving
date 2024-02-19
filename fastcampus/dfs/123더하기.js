// const input = ["3", "4", "7", "10"].map(Number);
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
for (let tc = 1; tc <= input[0]; tc++) {
  const n = input[tc];
  const queue = [0];
  let cnt = 0;

  function dfs(sum) {
    if (sum > n) {
      return;
    }
    if (sum === n) {
      cnt += 1;
      return;
    }
    for (let i = 1; i <= 3; i++) {
      dfs(sum + i);
    }
  }
  dfs(0);

  console.log(cnt);
}
