// 중복된 문자 제거

function solution(my_string) {
  return [...new Set(my_string)].join("");
}
