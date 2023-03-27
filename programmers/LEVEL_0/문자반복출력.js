// 문자 반복 출력

// 풀이 1
function solution(my_string, n) {
  return [...my_string].map((alph) => alph.repeat(n)).join("");
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
