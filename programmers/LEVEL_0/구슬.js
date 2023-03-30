// 구슬을 나누는 경우의 수

function solution(balls, share) {
  return balls === share
    ? 1
    : Math.round(
        factorial(balls) / (factorial(balls - share) * factorial(share))
      );
}
function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}
