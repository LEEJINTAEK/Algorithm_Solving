//풀이 1
function solution(a, b) {
  return a.map((x, i) => x * b[i]).reduce((acc, cur) => acc + cur, 0);
}

//풀이 2
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
