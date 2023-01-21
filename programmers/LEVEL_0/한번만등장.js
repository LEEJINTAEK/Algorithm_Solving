// 한 번만 등장한 문자

function solution(s) {
  let answer = [];
  for (let el of s) {
    if (s.indexOf(el) === s.lastIndexOf(el)) {
      answer.push(el);
    }
  }
  return answer.sort().join("");
}
