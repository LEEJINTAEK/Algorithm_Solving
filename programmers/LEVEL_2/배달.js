function solution(N, road, K) {
  const graph = Array.from(Array(N + 1), () =>
    Array(N + 1).fill(Number.MAX_SAFE_INTEGER)
  );

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) {
        graph[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < road.length; i++) {
    const [a, b, c] = road[i];
    graph[a][b] = Math.min(graph[a][b], c);
    graph[b][a] = Math.min(graph[b][a], c);
  }

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (graph[1][i] <= K) {
      count += 1;
    }
  }

  return count;
}
