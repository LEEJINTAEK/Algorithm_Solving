function solution(arr, k) {
  let answer = [];
  arr.forEach((n) => (answer.includes(n) ? "" : answer.push(n)));
  return answer.length >= k
    ? answer.slice(0, k)
    : [...answer, ...Array.from({ length: k - answer.length }, () => -1)];
}
