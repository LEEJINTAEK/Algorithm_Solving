const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["7 1 2 3 4 5 6 7", "8 1 2 3 5 8 13 21 34", "0"];
const testCase = Number(input[0].split(" ")[0]);
const PICK = 6;
const MAX_NUM = 49;

for (let test = 0; test < input.length; test++) {
  const answer = [];
  const check = Array.from({ length: MAX_NUM + 1 }, () => false);
  const data = input[test].split(" ").map(Number);
  if (data[0] === 0) {
    break;
  }

  const k = data.shift();
  const s = data.slice();

  function dfs(cur, arr) {
    if (arr.length === PICK) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = cur + 1; i < s.length; i++) {
      if (!check[i]) {
        check[i] = true;
        dfs(i, [...arr, s[i]]);
        check[i] = false;
      }
    }
  }

  for (let i = 0; i <= s.length - PICK; i++) {
    dfs(i, [s[i]]);
  }

  console.log(answer.join("\n") + "\n");
}

//
//
//파이썬

// from itertools import combinations

// while True:
//   line = input()
//   if line == '0':
//     break
//   line = list(map(int, line.split()))
//   k = line[0]
//   s = line[1:]
//   for combination in combinations(s,6):
//     print(" ".join(map(str,combination)))
//   print()
