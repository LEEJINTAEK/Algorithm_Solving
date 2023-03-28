//외계행성의 나이

function solution(age) {
  return [...age.toString()].map((n) => "abcdefghij"[n]).join("");
}
