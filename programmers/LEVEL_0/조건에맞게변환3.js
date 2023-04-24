function solution(arr, k) {
  return arr.map((n) => (k % 2 === 0 ? n + k : n * k));
}
