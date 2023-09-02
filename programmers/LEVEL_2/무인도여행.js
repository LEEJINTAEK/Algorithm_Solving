function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const visited = new Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(false));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const islands = [];

  function isValid(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
  }

  function dfs(x, y, island) {
    visited[x][y] = true;
    island.size += 1;
    island.food += parseInt(maps[x][y]);

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (isValid(nx, ny) && !visited[nx][ny] && maps[nx][ny] !== "X") {
        dfs(nx, ny, island);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") {
        const island = { size: 0, food: 0 };
        dfs(i, j, island);
        islands.push(island);
      }
    }
  }

  if (islands.length === 0) {
    return [-1];
  }

  const result = islands.map((island) => island.food).sort((a, b) => a - b);
  return result;
}
