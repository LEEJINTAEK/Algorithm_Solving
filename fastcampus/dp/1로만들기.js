const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["10"];

const n = Number(input[0]);
const d = Array.from({ length: n + 1 }, () => 0);

for (let i = 2; i <= n; i++) {
  d[i] = d[i - 1];
  if (i % 2 === 0) {
    d[i] = Math.min(d[i], d[i / 2]);
  }
  if (i % 3 === 0) {
    d[i] = Math.min(d[i], d[i / 3]);
  }
  d[i] += 1;
}

console.log(d[n]);

//bfs 풀이 시간초과
// const queue = [[n, 0]];

// while (queue.length) {
//   const [num, cnt] = queue.shift();

//   if (num === 1) {
//     console.log(cnt);
//     break;
//   }

//   if (num % 3 === 0) {
//     queue.push([num / 3, cnt + 1]);
//   }

//   if (num % 2 === 0) {
//     queue.push([num / 2, cnt + 1]);
//   }

//   queue.push([num - 1, cnt + 1]);
// }
