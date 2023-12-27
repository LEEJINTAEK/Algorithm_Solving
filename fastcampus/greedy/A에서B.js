const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [a, b] = input[0].split(" ").map(Number);

function solution(start, target) {
  let answer = 1;
  while (target >= start) {
    if (target === start) {
      return answer;
    }

    if (target % 2 === 0) {
      target /= 2;
    } else if (target % 10 === 1) {
      target = Math.floor(target / 10);
    } else {
      break;
    }
    answer += 1;
  }

  return -1;
}

console.log(solution(a, b));
