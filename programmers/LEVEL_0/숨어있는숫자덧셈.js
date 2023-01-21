//숨어있는 숫자의 덧셈 (1)

//풀이 1
function solution(my_string) {
  return my_string
    .split("")
    .filter((x) => x >= 1)
    .reduce((acc, cur) => +acc + +cur);
}

//풀이 2
function solution(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}
