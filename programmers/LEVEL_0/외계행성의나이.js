//외계행성의 나이

//풀이 1

function solution(age) {
  return age
    .toString()
    .split("")
    .map((el) => "abcdefghij"[el])
    .join("");
}
