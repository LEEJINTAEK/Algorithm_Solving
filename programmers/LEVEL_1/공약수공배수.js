//풀이 1
function solution(n, m) {
  let max;
  let min;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }
  for (let i = Math.max(n, m); i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      min = i;

      return [max, min];
    }
  }
}
