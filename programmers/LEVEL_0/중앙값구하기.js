//중앙값 구하기

// 풀이 1
function solution(array) {
  let answer = 0;
  let i = 0;
  array.sort((a, b) => a - b);
  i = parseInt(array.length / 2);
  answer = array[i];
  return answer;
}

// 풀이 2
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
