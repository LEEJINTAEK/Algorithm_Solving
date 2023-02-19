// 격자판 최대합
// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
// 니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
// 다.
// ▣ 출력설명
// 최대합을 출력합니다.
// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제 1
// 155

// 풀이 1
function solution(arr) {
  let rowMax = [];
  let columnMax = [];
  let crossMax = [];
  let n = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let rowSum = arr[i].reduce((a, b) => a + b, 0);
    rowMax.push(rowSum);
    let columnSum = [];
    let crossSum = [];
    for (let j = 0; j < arr.length; j++) {
      columnSum.push(arr[j][i]);
      if (i === 0) crossSum.push(arr[j][j]);
      if (i === 1) {
        crossSum.push(arr[j][n]);
        n -= 1;
      }
    }
    columnMax.push(columnSum.reduce((a, b) => a + b, 0));
    crossMax.push(crossSum.reduce((a, b) => a + b, 0));
  }
  return Math.max(
    rowMax.sort((a, b) => b - a)[0],
    columnMax.sort((a, b) => b - a)[0],
    crossMax.sort((a, b) => b - a)[0]
  );
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

//풀이 2

function solution1(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr1 = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution1(arr1));
