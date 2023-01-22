//문자열 정렬하기(1)

function solution(my_string) {
  return my_string
    .split("")
    .filter((x) => x >= 0)
    .map((x) => +x)
    .sort((a, b) => a - b);
}
