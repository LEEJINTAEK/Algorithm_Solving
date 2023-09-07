//bfs 풀이
function solution1(n, wires) {
  // 그래프 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  // BFS
  function bfs(start) {
    const visited = new Array(n + 1).fill(false);
    const queue = [start];
    visited[start] = true;
    let count = 1;

    while (queue.length > 0) {
      const node = queue.shift();
      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
          count += 1;
        }
      }
    }

    return count;
  }

  let minDifference = Infinity;

  // 모든 전선을 하나씩 끊어가며 차이 계산
  for (const [v1, v2] of wires) {
    graph[v1] = graph[v1].filter((neighbor) => neighbor !== v2);
    graph[v2] = graph[v2].filter((neighbor) => neighbor !== v1);

    const count1 = bfs(v2); // v1 | v2
    const count2 = n - count1;

    const difference = Math.abs(count1 - count2);
    minDifference = Math.min(minDifference, difference);

    // 다시 전선을 연결
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  return minDifference;
}

//다른 풀이
function solution2(n, wires) {
  const adjArr = [...Array(n + 1)].map(() => [...Array(n + 1)].map(() => 0));
  const visit = Array(n + 1).fill(0);
  let count = 0;

  wires.forEach(([v1, v2]) => {
    adjArr[v1][v2] = 1;
    adjArr[v2][v1] = 1;
  });

  const dfs = (tower) => {
    visit[tower] = 1;
    count++;

    for (let i = 1; i <= n; i++) {
      adjArr[tower][i] && !visit[i] && dfs(i);
    }
  };

  return wires.reduce((m, [v1, v2]) => {
    adjArr[v1][v2] = 0;
    adjArr[v2][v1] = 0;
    dfs(1);
    adjArr[v1][v2] = 1;
    adjArr[v2][v1] = 1;

    m = Math.min(m, Math.abs(n - 2 * count));
    visit.forEach((_, i) => (visit[i] = 0));
    count = 0;

    return m;
  }, n);
}
