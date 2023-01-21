function solution(n) {
  return n
    .toString()
    .split("")
    .map((x) => Number(x))
    .reduce((acc, cur) => acc + cur, 0);
}
