const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");
// const input = ["10 5", "1 2 3 4 2 5 3 1 1 2"];
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let rp = 0;
let sum = 0;
let answer = 0;
for (let lp = 0; lp < n; lp++) {
  while (sum < m && rp < n) {
    sum += arr[rp];
    rp += 1;
  }

  if (sum === m) {
    answer += 1;
  }
  sum -= arr[lp];
}

console.log(answer);
