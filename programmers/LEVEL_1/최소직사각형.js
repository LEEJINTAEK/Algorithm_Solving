//풀이 1
function solution1(sizes) {
  let min = [];
  let max = [];
  sizes.map((x, i) => {
    max[i] = Math.max(...x);
    min[i] = Math.min(...x);
  });

  return Math.max(...max) * Math.max(...min);
}

//풀이 2
function solution2(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1];
}
