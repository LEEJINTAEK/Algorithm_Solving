function solution(n, edge) {
  let answer = 0;
  let check = Array(n + 1).fill(-1);
  let adj = Array.from({ length: n + 1 }, () => Array());

  for (let i = 0; i < edge.length; i++) {
    adj[edge[i][0]].push(edge[i][1]);
    adj[edge[i][1]].push(edge[i][0]);
  }

  check[1] = 0;
  let queue = [1];

  while (queue.length) {
    let node = queue.shift();

    for (let i = 0; i < adj[node].length; i++) {
      let next = adj[node][i];
      if (check[next] === -1) {
        check[next] = check[node] + 1;
        queue.push(next);
      }
    }
  }

  let max = Math.max(...check);
  for (let i = 0; i < check.length; i++) {
    if (max === check[i]) answer++;
  }

  return answer;
}
