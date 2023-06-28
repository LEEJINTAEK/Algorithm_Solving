//bfs
function solutionBFS(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let answer = -1;

  const queue = [[0, 0, 1]];

  while (queue.length > 0) {
    const [x, y, cnt] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      answer = cnt;
      break;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        queue.push([nx, ny, cnt + 1]);
        maps[nx][ny] = 0;
      }
    }
  }

  return answer;
}

//dfs 실행시간 초과!!
function solutionDFS(maps) {
  const n = maps.length;
  const m = maps[0].length;
  let answer = Number.MAX_SAFE_INTEGER;

  function dfs(x, y, cnt) {
    if (x < 0 || x >= n || y < 0 || y >= m || maps[x][y] !== 1) {
      return;
    }
    if (x === n - 1 && y === m - 1) {
      answer = Math.min(answer, cnt);
      return;
    }

    maps[x][y] = 0;

    dfs(x + 1, y, cnt + 1);
    dfs(x, y + 1, cnt + 1);
    dfs(x - 1, y, cnt + 1);
    dfs(x, y - 1, cnt + 1);

    maps[x][y] = 1;
  }
  dfs(0, 0, 1);

  if (answer === Number.MAX_SAFE_INTEGER) {
    return -1;
  }
  return answer;
}
