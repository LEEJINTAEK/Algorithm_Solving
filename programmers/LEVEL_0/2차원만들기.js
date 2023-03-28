//2차원으로 만들기

function solution(num_list, n) {
  let result = [];
  while (num_list.length) {
    result.push(num_list.splice(0, n));
  }

  return result;
}
