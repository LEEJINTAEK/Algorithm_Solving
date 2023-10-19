function solution(data, col, row_begin, row_end) {
  //과정 1
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  //과정 2
  const answer = [];
  data.forEach((tuple, i) => {
    if (row_begin <= i + 1 && row_end >= i + 1) {
      answer.push(tuple.map((n) => n % (i + 1)).reduce((a, b) => a + b));
    }
  });

  //결과
  return answer.reduce((a, b) => a ^ b);
}
