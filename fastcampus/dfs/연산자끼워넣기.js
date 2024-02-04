const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["6", "1 2 3 4 5 6", "2 1 1 1"];
const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const operatorArr = ["+", "-", "*", "/"];
const operatorCnt = input[2].split(" ").map(Number);
const operator = {};
for (let c = 0; c < operatorCnt.length; c++) {
  operator[operatorArr[c]] = operatorCnt[c];
}
let maxNum = Number.MIN_SAFE_INTEGER;
let minNum = Number.MAX_SAFE_INTEGER;

function cal(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] === "+") {
      sum += arr[i + 1];
    }
    if (arr[i] === "-") {
      sum -= arr[i + 1];
    }
    if (arr[i] === "*") {
      sum *= arr[i + 1];
    }
    if (arr[i] === "/") {
      sum = parseInt(sum / arr[i + 1]);
    }
  }

  return sum;
}

function dfs(depth, tmp) {
  if (depth === n - 1) {
    const num = cal(tmp);
    maxNum = Math.max(maxNum, num);
    minNum = Math.min(minNum, num);
    return;
  }

  for (let i = 0; i < operatorArr.length; i++) {
    const op = operatorArr[i];
    if (operator[op] > 0) {
      operator[op] -= 1;
      dfs(depth + 1, [...tmp, op, nums[depth + 1]]);
      operator[op] += 1;
    }
  }
}

dfs(0, [nums[0]]);
console.log(`${maxNum}
${minNum}`);

// //다른 코드 풀이

// let n = Number(input[0]); // 수의 개수
// let arr = input[1].split(" ").map(Number); // 연산을 수행하고자 하는 수 리스트
// // 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)의 연산자 개수
// let [add, sub, mul, div] = input[2].split(" ").map(Number);
// // 최솟값과 최댓값 초기화
// let minValue = 1e9;
// let maxValue = -1e9;
// // DFS 메서드 호출
// dfs(1, arr[0]);
// // 최댓값과 최솟값을 차례대로 출력
// console.log(maxValue);
// console.log(minValue);

// function dfs(index, value) {
//   if (index == n) {
//     minValue = Math.min(minValue, value);
//     maxValue = Math.max(maxValue, value);
//     return;
//   }
//   if (add > 0) {
//     add--;
//     dfs(index + 1, value + arr[index]);
//     add++;
//   }
//   if (sub > 0) {
//     sub--;
//     dfs(index + 1, value - arr[index]);
//     sub++;
//   }
//   if (mul > 0) {
//     mul--;
//     dfs(index + 1, value * arr[index]);
//     mul++;
//   }
//   if (div > 0) {
//     div--;
//     dfs(index + 1, ~~(value / arr[index])); // 나눌 때는 나머지를 제거 (C++14과 동일)
//     div++;
//   }
// }
