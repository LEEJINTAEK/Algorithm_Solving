function solution(a, b, c) {
  return a !== b && b !== c && a !== c
    ? a + b + c
    : a === b && c === b && a === c
    ? (a + b + c) *
      (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
      (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
    : (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
}
