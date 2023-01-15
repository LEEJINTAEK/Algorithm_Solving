//대문자와 소문자

function solution(my_string) {
  return my_string
    .split("")
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
}
