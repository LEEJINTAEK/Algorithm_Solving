// 피자 나눠 먹기 (1)

// 풀이 1
function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    if (parseInt((7 * i) / n) < 1) {
      answer++;
    }
  }
  return answer;
}

// 풀이 2
function solution(n) {
  return Math.ceil(n / 7);
}
