const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["3", "7"];
const [n, k] = [input[0], input[1]].map(Number);

let [start, end] = [1, 10 ** 10];
let result = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += Math.min(parseInt(mid / i), n);
  }

  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);

// //메모리 초과

// const arr = Array.from({ length: n }, (_, i) =>
//   Array.from({ length: n }, (_, j) => (i + 1) * (j + 1))
// );
// const answer = arr.flat(1);
// answer.sort((a, b) => a - b);

// console.log(answer[k]);
