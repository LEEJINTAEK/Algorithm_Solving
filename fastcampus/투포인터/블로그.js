const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");
// const input = ["7 5", "1 1 1 1 1 5 1"];

const [n, x] = input[0].split(" ").map(Number);
const visited = input[1].split(" ").map(Number);

let sum = 0;
let cnt = 1;
for (let i = 0; i < x; i++) {
  sum += visited[i];
}
let maxSum = sum;
let [left, right] = [0, x - 1];

while (1) {
  right += 1;
  left += 1;

  if (right >= n) {
    break;
  }
  sum = sum + visited[right] - visited[left - 1];
  if (maxSum === sum) {
    cnt += 1;
    continue;
  }
  if (maxSum < sum) {
    maxSum = sum;
    cnt = 1;
  }
}

if (maxSum === 0) {
  console.log("SAD");
} else {
  console.log(maxSum);
  console.log(cnt);
}
