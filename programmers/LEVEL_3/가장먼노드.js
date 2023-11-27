function solution(n, edge) {
  let answer = 0;
  const check = Array(n + 1).fill(-1);
  const adj = Array.from({ length: n + 1 }, () => Array());

  for (let i = 0; i < edge.length; i++) {
    adj[edge[i][0]].push(edge[i][1]);
    adj[edge[i][1]].push(edge[i][0]);
  }

  check[1] = 0;
  const queue = [1];

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

  const max = Math.max(...check);
  for (const n of check) {
    if (max === n) {
      answer += 1;
    }
  }

  return answer;
}
