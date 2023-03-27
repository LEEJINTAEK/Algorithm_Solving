//인덱스 바꾸기

//풀이 1

function solution(my_string, num1, num2) {
  let tmp;
  my_string = [...my_string];

  tmp = my_string[num1];
  my_string[num1] = my_string[num2];
  my_string[num2] = tmp;

  return my_string.join("");
}

//풀이 2
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
