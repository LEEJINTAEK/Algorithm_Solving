//풀이 1
function solution1(s) {
  s = s.split("");
  let leng = s.length;
  if (leng % 2 !== 0) {
    s = s.slice(leng / 2, leng / 2 + 1).join("");
  } else {
    s = s.slice(leng / 2 - 1, leng / 2 + 1).join("");
  }
  return s;
}

//풀이 2
function solution2(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
