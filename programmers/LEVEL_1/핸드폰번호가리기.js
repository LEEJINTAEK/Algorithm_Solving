// 풀이 1
function solution1(phone_number) {
  let answer = [...phone_number].reverse().slice(0, 4);
  //["4","4","4","4"]
  for (let i = 0; i < phone_number.length - 4; i++) {
    answer.push("*");
  }
  return answer.reverse().join("");
}

//풀이 2
function solution2(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

//풀이 3
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}
