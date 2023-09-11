function solution(n, computers) {
  const visited = Array(n).fill(false);
  let network = 0;

  function dfs(computer) {
    visited[computer] = true;

    for (let i = 0; i < n; i++) {
      if (computers[i][computer] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      network += 1;
    }
  }

  return network;
}
