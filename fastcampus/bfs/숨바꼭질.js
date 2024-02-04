// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["5 17"];

const [n, k] = input[0].split(" ").map(Number);
const queue = [[n, 0]];
const MAX = 100001;
const check = Array.from({ length: MAX }, () => false);
check[n] = true;

while (queue.length) {
  const [cur, cnt] = queue.shift();
  if (cur === k) {
    console.log(cnt);
    return;
  }
  for (const next of [cur - 1, cur + 1, cur * 2]) {
    if (next < 0 || next > MAX) {
      continue;
    }
    if (!check[next]) {
      check[next] = true;
      queue.push([next, cnt + 1]);
    }
  }
}
