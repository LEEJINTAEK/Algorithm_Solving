const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 2"];
const [n, m] = input[0].split(" ").map(Number);
const check = Array.from({ length: n + 1 }, () => false);
const register = [];
const answer = [];

function dfs(depth, arr) {
  if (arr.length === m) {
    const registerStr = arr.sort((a, b) => a - b).join("");
    if (!register.includes(registerStr)) {
      answer.push(arr.join(" "));
      register.push(registerStr);
    }
    return;
  }

  for (let i = depth + 1; i <= n; i++) {
    if (!check[i]) {
      check[i] = true;
      dfs(depth, [...arr, i]);
      check[i] = false;
    }
  }
}

for (let i = 1; i <= n; i++) {
  dfs(i, [i]);
}
console.log(answer.join("\n"));

//백트래킹

let [n, m] = input[0].split(" ").map(Number); // 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 조합
let arr = []; // 조합을 계산하고자 하는 원소(element)가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false); // 각 원소 인덱스(index)별 방문 여부
let selected = []; // 현재 조합에 포함된 원소(element)의 인덱스
let answer = "";
function dfs(arr, depth, start) {
  if (depth == m) {
    // 모든 조합을 확인하는 부분
    let result = []; // 조합(combination) 결과 저장 테이블
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " "; // 계산된 조합을 실질적으로 처리하는 부분
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    // start 지점부터 하나씩 원소 인덱스(index)를 확인하며
    if (visited[i]) continue; // [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth + 1, i + 1); // 조합이므로, 재귀 함수 호출시 다음 인덱스(index)를 넣기
    selected.pop(); // 현재 원소 선택 취소
    visited[i] = false; // 현재 원소 방문 처리 취소
  }
}
dfs(arr, 0, 0);
console.log(answer);

//
//
//파이썬
// n,m = map(int, input().split())

// def dfs(arr,start):
//     if len(arr) == m:
//         print(' '.join(map(str, arr)))
//         return
//     for i in range(start, n+1):
//           arr.append(i)
//           dfs(arr,i+1)
//           arr.pop()
// dfs([],1)
