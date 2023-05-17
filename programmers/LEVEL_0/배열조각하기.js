function solution(arr, query) {
  return query.map((x, i) =>
    i % 2 === 0 ? (arr = arr.slice(0, x + 1)) : (arr = arr.slice(x))
  )[query.length - 1];
}
