function solution(n, results) {
  const win = Array.from({ length: n + 1 }, () => new Set());
  const lose = Array.from({ length: n + 1 }, () => new Set());

  for (let i = 0; i < results.length; i++) {
    const [winner, loser] = results[i];
    win[winner].add(loser);
    lose[loser].add(winner);
  }

  for (let i = 1; i <= n; i++) {
    for (let loser of lose[i]) {
      win[loser] = new Set([...win[loser], ...win[i]]);
    }
    for (let winner of win[i]) {
      lose[winner] = new Set([...lose[winner], ...lose[i]]);
    }
  }

  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (win[i].size + lose[i].size === n - 1) {
      count += 1;
    }
  }

  return count;
}
