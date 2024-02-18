// const file = require("fs").readFileSync("/dev/stdin");
// const input = file.toString().split("\n");
const input = ["5 3", "2 3 5 9 11", "1 4 10"];
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let [i, j] = [0, 0];
const answer = [];

while (i < n && j < m) {
  if (A[i] < B[j]) {
    answer.push(A[i]);
    i += 1;
    continue;
  }
  answer.push(B[j]);
  j += 1;
}

while (i < n) {
  answer.push(A[i]);
  i += 1;
}

while (j < m) {
  answer.push(B[j]);
  j += 1;
}

console.log(answer.join(" "));
