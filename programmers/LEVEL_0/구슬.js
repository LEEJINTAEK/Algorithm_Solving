// 구슬을 나누는 경우의 수

//풀이 1

// 풀이 2
function solution(balls, share) {
  if (balls == share) {
    return 1;
  } else {
    return Math.round(
      factorial(balls) / (factorial(balls - share) * factorial(share))
    );
  }
}
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
