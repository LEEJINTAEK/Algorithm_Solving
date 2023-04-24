function solution(start, end) {
  start += 1;
  let answer = Array.from({ length: start - end }, () => (start -= 1));
  return answer;
}
