function solution(a, b) {
  return Number(a.toString() + b.toString()) < 2 * a * b
    ? 2 * a * b
    : Number(a.toString() + b.toString());
}
