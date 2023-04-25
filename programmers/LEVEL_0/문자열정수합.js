function solution(num_str) {
  return [...num_str].map((num) => +num).reduce((a, b) => a + b);
}
