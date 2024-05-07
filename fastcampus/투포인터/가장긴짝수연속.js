// const file = require("fs").readFileSync("/dev/stdin");
// const input = file.toString().split("\n");
const input = ["8 2", "1 2 3 4 5 6 7 8"];
const [n, k] = input[0].split(" ").map(Number);
const s = input[1].split(" ").map(Number);

let answer = 0;
let end = 0;
let cnt = 0;
for (let start = 0; start < n; start++) {
  while (end < n) {
    if (s[end] % 2 === 0) {
      end += 1;
    } else {
      if (cnt === k) {
        break;
      }
      cnt += 1;
      end += 1;
    }
  }

  answer = Math.max(answer, end - start - cnt);

  if (s[start] % 2 !== 0) {
    cnt -= 1;
  }
}

console.log(answer);

//
//
//파이썬

// n, k = map(int, input().split())
// s = list(map(int, input().split()))

// end = 0
// cnt = 0
// answer = 0

// for start in range(n):
//   while end < n:
//     if s[end] % 2 == 0:
//       end += 1
//     else:
//       if cnt == k:
//         break
//       cnt += 1
//       end += 1

//   answer = max(answer, end - start - cnt)

//   if s[start] % 2 !=0 :
//     cnt -= 1

// print(answer)
