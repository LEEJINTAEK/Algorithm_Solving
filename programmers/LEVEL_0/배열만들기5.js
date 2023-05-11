function solution(intStrs, k, s, l) {
  return intStrs.map((n) => Number(n.slice(s, s + l))).filter((n) => n > k);
}
