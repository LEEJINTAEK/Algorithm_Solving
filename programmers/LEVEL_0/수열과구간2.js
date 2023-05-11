function solution(arr, queries) {
  let answer = [];
  queries.forEach((query) => {
    let tmp = [];
    for (let i = query[0]; i <= query[1]; i++) {
      if (arr[i] > query[2]) {
        tmp.push(arr[i]);
      }
    }
    answer.push(tmp.sort((a, b) => a - b)[0] || -1);
  });

  return answer;
}
