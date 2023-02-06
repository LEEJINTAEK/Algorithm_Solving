//모름
function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safeZone = 0;
  board.forEach((el, i, array) =>
    el.forEach((x, j) => {
      if (x === 1) return 0;
      return outside.some(([y, k]) => !!array[y + i]?.[k + j]) ? 0 : safeZone++;
    })
  );
  return safeZone;
}
