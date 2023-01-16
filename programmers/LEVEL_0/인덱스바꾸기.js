//인덱스 바꾸기

// function solution(my_string, num1, num2) {
//   let array = [];
//   let temp = "";
//   array = my_string.split("");

//   temp = array[num1];
//   array[num1] = array[num2];
//   array[num2] = temp;

//   return array.join("");
// }

function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}
