// 문자 반복 출력

// 풀이 1
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}

// 풀이 2
function solution(my_string, n) {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer = answer + my_string[i];
    }
  }
  return answer;
}
