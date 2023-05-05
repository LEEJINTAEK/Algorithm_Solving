function solution(myStr) {
  let answer = myStr
    .replaceAll(/[abc]/g, " ")
    .split(" ")
    .filter((str) => str);
  return answer.length === 0 ? ["EMPTY"] : answer;
}
