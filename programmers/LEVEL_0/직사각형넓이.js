function solution(dots) {
  let w = dots.map((x) => x[0]).sort((a, b) => a - b);
  let h = dots.map((y) => y[1]).sort((a, b) => a - b);
  return (w[3] - w[0]) * (h[3] - h[0]);
}
