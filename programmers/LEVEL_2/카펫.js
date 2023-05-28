function solution(brown, yellow) {
  let area = brown + yellow;

  for (let i = parseInt(Math.sqrt(area)); i >= 3; i--) {
    if (area % i === 0) {
      let j = area / i;
      if ((i - 2) * (j - 2) === yellow) {
        return i >= j ? [i, j] : [j, i];
      }
    }
  }
}
