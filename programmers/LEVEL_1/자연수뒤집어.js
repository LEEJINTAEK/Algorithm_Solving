//풀이 1
function solution1(n) {
  let answer = [];
  let store = n
    .toString()
    .split("")
    .map((x) => Number(x));
  for (let i = store.length; i > 0; i--) {
    answer.push(store.pop());
  }
  return answer;
}

//풀이 2
function solution2(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((x) => Number(x));
}
