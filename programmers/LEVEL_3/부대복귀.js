function solution(n, roads, sources, destination) {
  const answer = [];
  const adj = Array.from({ length: n + 1 }, () => Array());
  const check = Array.from({ length: n + 1 }, () => -1);

  for (let i = 0; i < roads.length; i++) {
    adj[roads[i][0]].push(roads[i][1]);
    adj[roads[i][1]].push(roads[i][0]);
  }

  check[destination] = 0;
  const queue = [destination];

  while (queue.length) {
    const node = queue.shift();
    for (let i = 0; i < adj[node].length; i++) {
      const next = adj[node][i];
      if (check[next] === -1) {
        check[next] = check[node] + 1;
        queue.push(next);
      }
    }
  }

  for (let i = 0; i < sources.length; i++) {
    answer.push(check[sources[i]]);
  }

  return answer;
}
