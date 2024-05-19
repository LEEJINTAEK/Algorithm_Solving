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

//
//
//파이썬

// start, end = map(int,input().split())

// answer = 1
// possible = False

// while end>=start:

//     if end == start:
//         possible = True
//         break

//     if end % 2 == 0:
//         end //= 2
//     elif end % 10 == 1:
//         end //= 10
//     else:
//         break

//     answer += 1

// if possible:
//     print(answer)
// else:
//     print(-1)
