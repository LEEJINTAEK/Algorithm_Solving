//풀이 1
function solution(n) {
  let answer = [];
  let i = 1;
  while (i !== n + 1) {
    i % 2 !== 0 ? answer.push("수") : answer.push("박");
    i++;
  }
  return answer.join("");
}

//풀이 2
function solution2(n) {
  return "수박".repeat(n).slice(0, n);
}
