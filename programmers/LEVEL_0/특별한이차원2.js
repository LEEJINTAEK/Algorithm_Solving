function solution(arr) {
  return arr
    .map((x, i) =>
      x.map((_, j) => (arr[j][i] === x[j] ? " " : x[j])).filter((x) => x > 0)
    )
    .join("").length === 0
    ? 1
    : 0;
}
