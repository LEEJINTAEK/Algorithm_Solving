const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = input[0];
const times = [];

for (let i = 1; i <= n; i++) {
  times.push(input[i].split(" ").map(Number));
}

function solution(n, times) {
  times.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let count = 1;
  let preTime = times[0][1];

  for (let i = 1; i < n; i++) {
    const [startTime, endTime] = times[i];
    if (preTime <= startTime) {
      preTime = endTime;
      count += 1;
    }
  }

  return count;
}

console.log(solution(n, times));

//
//
//파이썬

// n = int(input())
// schedule = [list(map(int,input().split())) for _ in range(n)]
// schedule.sort(key= lambda x : (x[1],x[0]))
// answer = 1
// pre_time = schedule[0][1]

// for seq in range(1,n):
//     start,end = schedule[seq]
//     if pre_time <= start:
//         answer += 1
//         pre_time = end
// print(answer)
