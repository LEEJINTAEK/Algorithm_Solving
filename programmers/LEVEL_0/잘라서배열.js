//잘라서 배열로 저장하기

function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}
