//모음 제거

function solution(my_string) {
  let remove = /[aeiou]/g;
  return my_string.replace(remove, "");
}
