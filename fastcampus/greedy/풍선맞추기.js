function solution(height) {
  const n = height.length;
  const arrow = Array(n).fill(0);
  let count = 0;
  for (const h of height) {
    if (arrow[h] > 0) {
      arrow[h - 1] += 1;
      arrow[h] -= 1;
    } else {
      arrow[h - 1] += 1;
      count += 1;
    }
  }

  return count;
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line); // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
}).on("close", function () {
  const data = input[1].split(" ").map(Number); // 모든 풍선의 위치 정보 입력받기

  console.log(solution(data));
  process.exit();
});

//
//
//파이썬

// n = int(input())
// height = tuple(map(int, input().split()))
// arrow = [0] * (max(height)+1)
// answer = 0
// for h in height:
//     arrow[h-1] += 1
//     if arrow[h] > 0:
//         arrow[h] -= 1
//     else:
//         answer += 1
// print(answer)
