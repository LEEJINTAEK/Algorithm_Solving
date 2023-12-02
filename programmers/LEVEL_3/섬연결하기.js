function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);

  let [from, to, cost] = costs.shift();
  const islands = new Set([from, to]);
  let answer = cost;

  while (islands.size < n) {
    for (let i = 0; i < costs.length; i++) {
      [from, to, cost] = costs[i];
      if (islands.has(from) && islands.has(to)) {
        continue;
      }
      if (islands.has(from) || islands.has(to)) {
        islands.add(from);
        islands.add(to);
        answer += cost;
        costs.splice(i, 1);
        break;
      }
    }
  }

  return answer;
}
