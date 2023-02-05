// sort-> 음수를 반환시 a가 먼저, 양수면 b가 먼저
// b랑 a의 거리가 같은 상황인 Math.abs(a - n) - Math.abs(b - n)이게 0이 되는 상황이 되면 큰 수를 먼저 나오도록 b-a

function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
