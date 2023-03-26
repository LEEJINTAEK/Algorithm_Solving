function solution(n, m, section) {
  let count = 0;
  let painted = 0;
  section.forEach((paint) => {
    if (paint > painted) {
      count += 1;
      painted = paint + m - 1;
    }
  });
  return count;
}
