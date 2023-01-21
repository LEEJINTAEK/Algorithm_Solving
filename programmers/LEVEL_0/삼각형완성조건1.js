//삼각형의 완성조건(1)

function solution(sides) {
  let longest = sides.sort((a, b) => a - b).pop();
  return sides.reduce((acc, cur) => acc + cur, 0) > longest ? 1 : 2;
}
