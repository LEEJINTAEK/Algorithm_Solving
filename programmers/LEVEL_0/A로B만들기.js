//A로 B 만들기

function solution(before, after) {
  let answer =
    before.split("").sort().join("") === after.split("").sort().join("")
      ? 1
      : 0;
  return answer;
}
