function solution(start, end) {
  start = start - 1;
  let answer = Array.from({ length: end - start }, () => (start += 1));
  return answer;
}
