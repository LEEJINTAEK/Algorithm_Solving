// 한 번만 등장한 문자
function solution(s) {
  let answer = [];
  for (const alph of s) {
    if (s.indexOf(alph) === s.lastIndexOf(alph)) {
      answer.push(alph);
    }
  }

  return answer.sort().join("");
}
