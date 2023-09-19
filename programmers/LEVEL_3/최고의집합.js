function solution(n, s) {
  if (n > s) {
    return [-1];
  }
  const answer = Array(n).fill(Math.floor(s / n));

  //나머지 값 처리 -> 최대 큰 값으로
  for (let i = 0; i < s % n; i++) {
    answer[n - 1 - i] += 1;
  }

  return answer;
}
