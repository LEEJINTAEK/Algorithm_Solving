// 피자 나눠 먹기 (2)

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if ((6 * i) % n === 0) {
      return i;
    }
  }
}
