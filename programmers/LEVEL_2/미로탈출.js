function solution(maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const n = maps.length;
  const m = maps[0].length;

  let lever = [],
    start = [],
    exit = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") start = [i, j];
      if (maps[i][j] === "L") lever = [i, j];
      if (maps[i][j] === "E") exit = [i, j];
    }
  }

  let leverTime = bfs(start[0], start[1], lever[0], lever[1]);
  let exitTime = bfs(lever[0], lever[1], exit[0], exit[1]);

  if (leverTime === -1 || exitTime === -1) {
    return -1;
  }
  return leverTime + exitTime;

  function bfs(x, y, targetX, targetY) {
    let visit = Array.from(Array(n), () => Array(m).fill(false));
    let queue = [[x, y, 0]];
    visit[x][y] = true;

    while (queue.length > 0) {
      let [x, y, time] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        let ntime = time + 1;

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
          continue;
        }
        if (visit[nx][ny] || maps[nx][ny] === "X") {
          continue;
        }
        if (nx === targetX && ny === targetY) {
          return ntime;
        }
        queue.push([nx, ny, ntime]);
        visit[nx][ny] = true;
      }
    }

    return -1;
  }
}
