function solution(dirs) {
  const visited = new Set();
  let [x, y] = [0, 0];

  const move = (dir) => {
    if (dir === "U" && y < 5) {
      y += 1;
    }
    if (dir === "D" && y > -5) {
      y -= 1;
    }
    if (dir === "R" && x < 5) {
      x += 1;
    }
    if (dir === "L" && x > -5) {
      x -= 1;
    }
  };

  for (const dir of dirs) {
    const [preX, preY] = [x, y];
    move(dir);
    const [newX, newY] = [x, y];

    if (preX === newX && preY === newY) {
      continue;
    }

    visited.add(`${preX},${preY},${newX},${newY}`);
    visited.add(`${newX},${newY},${preX},${preY}`);
  }
  return visited.size / 2;
}
