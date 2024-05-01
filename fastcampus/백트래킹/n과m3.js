const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["3 3"];
const [n, m] = input[0].split(" ").map(Number);
const answer = [];

function dfs(depth, arr) {
  if (arr.length === m) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    dfs(depth, [...arr, i]);
  }
}

for (let i = 1; i <= n; i++) {
  dfs(i, [i]);
}
console.log(answer.join("\n"));

//백트래킹

let [n, m] = input[0].split(" ").map(Number); // 1부터 N까지 자연수 중에서 M개를 고른 중복 순열
let arr = []; // 중복 순열을 계산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let selected = []; // 현재 중복 순열에 포함된 원소(element)의 인덱스
let answer = "";
function dfs(arr, depth) {
  if (depth == m) {
    // 모든 중복 순열을 확인하는 부분
    let result = []; // 중복 순열 결과 저장 테이블
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " "; // 계산된 중복 순열을 실질적으로 처리하는 부분
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    // 하나씩 원소 인덱스(index)를 확인하며
    selected.push(i); // 현재 원소 선택
    dfs(arr, depth + 1); // 재귀 함수 호출
    selected.pop(); // 현재 원소 선택 취소
  }
}
dfs(arr, 0);
console.log(answer);

//
//
//파이썬
// n,m = map(int, input().split())

// def dfs(arr):
//     if len(arr) == m:
//         print(' '.join(map(str, arr)))
//         return
//     for i in range(1, n+1):
//           arr.append(i)
//           dfs(arr)
//           arr.pop()
// dfs([])
