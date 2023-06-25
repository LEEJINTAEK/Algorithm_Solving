function solution(dirs) {
  const visited = new Set();
  let [x, y] = [0, 0];

  const move = (dir) => {
    // 캐릭터 이동 함수
    switch (dir) {
      case "U":
        if (y < 5) {
          y += 1;
        }
        break;
      case "D":
        if (y > -5) {
          y -= 1;
        }
        break;
      case "R":
        if (x < 5) {
          x += 1;
        }
        break;
      case "L":
        if (x > -5) {
          x -= 1;
        }
        break;
    }
  };

  for (const dir of dirs) {
    const prevX = x;
    const prevY = y;
    move(dir);
    const newX = x;
    const newY = y;

    if (prevX === newX && prevY === newY) {
      continue;
    }
    //경로 추가
    visited.add(`${prevX},${prevY},${newX},${newY}`);
    visited.add(`${newX},${newY},${prevX},${prevY}`);
  }

  return visited.size / 2;
}
