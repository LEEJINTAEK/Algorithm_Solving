// 시에 다음 회의가 시작될 수 있다.
// ▣ 입력설명
// 첫째 줄에 회의의 수 n(1<=n<=100,000)이 주어진다. 둘째 줄부터 n+1 줄까지 각 회의의 정
// 보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다.
// 회의의 시작시간과 끝나는 시간의 조건은 (시작시간 <= 끝나는 시간)입니다.
// ▣ 출력설명
// 첫째 줄에 최대 사용할 수 있는 회의 수를 출력하여라.
// ▣ 입력예제 1
// 5
// 1 4
// 2 3
// 3 5
// 4 6
// 5 7
// ▣ 출력예제 1
// 3
// 예제설명
// (2, 3), (3, 5), (5, 7)이 회의실을 이용할 수 있다.
// ▣ 입력예제 2
// 3
// 3 3
// 1 3
// 2 3
// ▣ 출력예제 2
// 2

//풀이 1

function solution(meeting) {
  let meet = arr.slice().sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let endTime = 0;
  let answer = 0;
  for (let x of meet) {
    if (x[0] >= endTime) {
      answer++;
      endTime = x[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
