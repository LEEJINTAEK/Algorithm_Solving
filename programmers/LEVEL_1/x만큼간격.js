//풀이 1

function solution1(x, n) {
  let answer = [];
  let sum = 0;
  while (true) {
    sum = sum + x;
    answer.push(sum);
    if (answer.length === n) break;
  }
  return answer;
}

//풀이 2
function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
