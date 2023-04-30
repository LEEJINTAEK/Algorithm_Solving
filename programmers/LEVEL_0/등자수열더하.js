function solution(a, d, included) {
  return included
    .map((bool, i) => (bool === true ? (bool = a + d * i) : 0))
    .reduce((acc, cur) => acc + cur, 0);
}
