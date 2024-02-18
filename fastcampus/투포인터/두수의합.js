const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");
// const input = ["9", "5 12 7 10 9 1 2 3 11", "13"];
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const x = Number(input[2]);

arr.sort((a, b) => a - b);
arr;
let [lp, rp] = [0, n - 1];
let answer = 0;

while (lp < rp) {
  const cal = arr[lp] + arr[rp];
  if (cal === x) {
    answer += 1;
    lp += 1;
    continue;
  }

  if (cal > x) {
    rp -= 1;
  } else {
    lp += 1;
  }
}

console.log(answer);
