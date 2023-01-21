function solution(n) {
  let answer = Math.sqrt(n);
  return answer === parseInt(answer) ? Math.pow(answer + 1, 2) : -1;
}
