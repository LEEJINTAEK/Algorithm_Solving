//풀이 1
function solution1(absolutes, signs) {
  return absolutes
    .map((x, i) => (signs[i] === true ? +x : -x))
    .reduce((a, b) => a + b, 0);
}

//풀이 2
function solution2(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
