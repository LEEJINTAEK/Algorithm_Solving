//3 6 9 게임

// 풀이 1
function solution(order) {
  let answer = "";
  answer = order
    .toString()
    .split("")
    .filter((word) => Number(word) % 3 === 0 && Number(word) > 0);
  return answer.length;
}

// 풀이 2
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
