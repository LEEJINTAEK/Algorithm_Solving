const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(n) {
  let answer = 0;
  while (n >= 0) {
    if (n === 0 || n % 5 === 0) {
      answer += n / 5;
      n = n % 5;
    } else {
      n -= 3;
      answer += 1;
    }
  }

  return n === 0 ? answer : -1;
}

console.log(solution(Number(input[0])));
