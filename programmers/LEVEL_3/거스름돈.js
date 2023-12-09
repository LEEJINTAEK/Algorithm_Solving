function solution(n, money) {
  const possible = Array.from({ length: n + 1 }, () => 0);
  possible[0] = 1;

  for (const coin of money) {
    for (let i = coin; i <= n; i++) {
      possible[i] += possible[i - coin];
    }
  }

  return possible[n];
}
