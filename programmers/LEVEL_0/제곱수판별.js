//제곱수 판별하기

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (Math.pow(i, 2) === n) {
      return 1;
    }
  }
  return 2;
}
