// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["2", "< >"];
const k = Number(input[0]);
const compare = input[1].split(" ");
const check = Array.from({ length: k + 1 }, () => false);

let [min, max] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
let [minStr, maxStr] = ["", ""];

function dfs(tmp, depth) {
  if (depth === k) {
    const numStr = tmp.join("");
    const cal = Number(numStr);

    if (min > cal) {
      min = cal;
      minStr = numStr;
    }
    if (max < cal) {
      max = cal;
      maxStr = numStr;
    }
    return;
  }

  for (let next = 0; next <= k; next++) {
    let flag = false;

    if (!check[next]) {
      if (compare[depth] === "<") {
        flag = tmp[tmp.length - 1] < next;
      }
      if (compare[depth] === ">") {
        flag = tmp[tmp.length - 1] > next;
      }
      if (flag) {
        check[next] = true;
        dfs([...tmp, next], depth + 1);
        check[next] = false;
      }
    }
  }
}

for (let i = 0; i <= k; i++) {
  check[i] = true;
  dfs([i], 0);
  check[i] = false;
}

console.log(`${maxStr}
${minStr}`);

//
//
//파이썬

// n = int(input())
// compare = input().split()

// max_value = float('-inf')
// min_value = float('inf')
// max_answer = ''
// min_answer = ''

// def dfs(compare_idx, arr):

//   if compare_idx == n:
//     global min_answer, max_answer, min_value, max_value
//     num = ''.join(map(str,arr))
//     if min_value > int(num):
//       min_value = int(num)
//       min_answer = num
//     if max_value < int(num):
//       max_value = int(num)
//       max_answer = num
//     return

//   cur_compare = compare[compare_idx]

//   for i in range(0,10):

//     if i in arr:
//       continue

//     possible = False
//     if cur_compare == '<':
//       possible = arr[-1] < i
//     else:
//       possible = arr[-1] > i

//     if possible:
//       arr.append(i)
//       dfs(compare_idx + 1, arr)
//       arr.pop()

// for i in range(0,10):
//   dfs(0, [i])

// print(f'{max_answer}\n{min_answer}')
