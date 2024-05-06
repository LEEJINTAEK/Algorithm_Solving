const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["7 392"];
const [s, t] = input[0].split(" ").map(Number);

if (s === t) {
  console.log(0);
  process.exit();
}
const operators = ["*", "+", "-", "/"];
let possible = false;
const queue = [["", s]];
const check = new Set([s]);

while (queue.length) {
  const [op, total] = queue.shift();
  if (total > 1e9) {
    continue;
  }
  if (total === t) {
    console.log(op);
    possible = true;
    break;
  }
  for (const operator of operators) {
    const nextOp = op + operator;
    let nextValue = total;
    if (operator === "+") {
      nextValue += total;
    }
    if (operator === "-") {
      nextValue -= total;
    }
    if (operator === "*") {
      nextValue *= total;
    }
    if (operator === "/" && s !== 0) {
      nextValue = 1;
    }
    if (!check.has(nextValue)) {
      queue.push([nextOp, nextValue]);
      check.add(nextValue);
    }
  }
}
if (!possible) {
  console.log(-1);
}

//
//
//파이썬

// from collections import deque

// s,t = map(int,input().split())
// q = deque([[s,'']])
// check = set()

// if s == t:
//   print(0)
// else:
//   answer = -1

//   while q:
//     cur, operator = q.popleft()

//     if cur > 1e9:
//       continue

//     if cur == t:
//       answer = operator
//       break

//     if cur in check:
//       continue

//     check.add(cur)
//     q.append([cur * cur, operator + '*'])
//     q.append([cur * 2, operator + '+'])
//     q.append([0, operator + '-'])

//     if cur != 0 :
//       q.append([1, operator + '/'])

//   print(answer)
