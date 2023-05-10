function solution(number) {
  return [...number].map((x) => +x).reduce((a, b) => a + b, 0) % 9;
}
