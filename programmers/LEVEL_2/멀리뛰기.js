//풀이 1
function solution(n) {
  let answer = 0;
  //Bigint 사용 (정수 오버플로우 문제 발생)
  let step = Array.from({ length: n + 1 }, () => 0n);
  step[1] = 1n;
  step[2] = 2n;
  for (let i = 3; i <= n; i++) {
    step[i] = step[i - 2] + step[i - 1];
  }
  answer = step[n] % 1234567n;
  return answer;
}

//풀이 2

function jumpCase(num) {
  return num == 1 ? 1 : num == 2 ? 2 : jumpCase(num - 1) + jumpCase(num - 2);
}
