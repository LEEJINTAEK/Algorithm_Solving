// 주사위의 개수

function solution(box, n) {
  return box.map((x) => Math.floor(x / n)).reduce((pre, crr) => pre * crr, 1);
}
