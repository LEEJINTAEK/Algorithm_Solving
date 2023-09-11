//bfs

function solutionBFS(maps) {
  const [yLen, xLen] = [maps.length, maps[0].length];
  const [yGoal, xGoal] = [yLen - 1, xLen - 1];
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [y, x, step] = queue.shift();

    if (y < 0 || y >= yLen || x < 0 || x >= xLen || maps[y][x] === 0) {
      continue;
    }

    //먼저 도달
    if (y === yGoal && x === xGoal) {
      return step;
    }

    //step
    maps[y][x] = 0;

    queue.push([y + 1, x, step + 1]);
    queue.push([y, x + 1, step + 1]);
    queue.push([y - 1, x, step + 1]);
    queue.push([y, x - 1, step + 1]);
  }
  return -1;
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
