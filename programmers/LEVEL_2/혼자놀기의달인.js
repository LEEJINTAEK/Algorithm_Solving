function solution(cards) {
  const check = Array(cards.length + 1).fill(false);
  let answer = [];

  function dfs(num, cnt) {
    if (check[num]) {
      answer.push(cnt);
      return;
    }

    check[num] = true;
    dfs(cards[num - 1], cnt + 1);
  }

  for (let i = 0; i < cards.length; i++) {
    const num = cards[i];
    if (!check[num]) {
      dfs(num, 0);
    }
  }
  answer.sort((a, b) => b - a);

  return answer.length === 1 ? 0 : answer[0] * answer[1];
}
