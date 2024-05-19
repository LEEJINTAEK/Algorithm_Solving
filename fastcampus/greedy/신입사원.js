const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const testCase = input[0];
let line = 1;

function solution(data) {
  data.sort((a, b) => a[0] - b[0]);
  let answer = 0;
  let minValue = Number.MAX_SAFE_INTEGER;

  for (const [x, y] of data) {
    if (y < minValue) {
      minValue = y;
      answer += 1;
    }
  }

  return answer;
}

for (let tc = 1; tc <= testCase; tc++) {
  n = Number(input[line]);
  const data = [];
  for (let i = line + 1; i <= n + line; i++) {
    const tmp = input[i].split(" ").map(Number);
    data.push(tmp);
  }
  console.log(solution(data));
  line += n + 1;
}

//
//
//파이썬

// test_case = int(input())
// for _ in range(test_case):
//     n = int(input())
//     arr = [list(map(int, input().split())) for _ in range(n)]
//     arr.sort(key=lambda x : x[0])
//     answer = 0
//     min_value = float('inf')
//     for x,y in arr:
//         if y < min_value:
//             answer += 1
//             min_value = y
//     print(answer)
