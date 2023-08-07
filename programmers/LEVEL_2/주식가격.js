function solution(prices) {
  const answer = [];
  let p = 0;
  while (p < prices.length - 1) {
    for (let i = p + 1; i < prices.length; i++) {
      if (prices[p] > prices[i]) {
        answer.push(i - p);
        break;
      }
      if (i === prices.length - 1) {
        answer.push(i - p);
      }
    }
    p += 1;
  }
  answer.push(0);
  return answer;
}
