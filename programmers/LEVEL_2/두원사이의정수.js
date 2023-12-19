const getDotCount = (r, isInclude) => {
  let dot = 0;
  for (let i = 1; i <= r; i++) {
    const range = Math.sqrt(Math.pow(r, 2) - Math.pow(i, 2));
    const floorRange = Math.floor(range);

    if (isInclude) {
      dot += floorRange;
      continue;
    }

    dot += floorRange;
    if (range === floorRange) {
      dot -= 1;
    }
  }

  return dot * 4 + r * 4;
};

function solution(r1, r2) {
  return getDotCount(r2, true) - getDotCount(r1, false);
}
