//7의 개수

function solution(array) {
  return array
    .join("")
    .split("")
    .filter((x) => x == 7).length;
}
