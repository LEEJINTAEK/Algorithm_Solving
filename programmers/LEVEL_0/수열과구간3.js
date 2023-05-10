function solution(arr, queries) {
  queries.forEach((x) => ([arr[x[0]], arr[x[1]]] = [arr[x[1]], arr[x[0]]]));
  return arr;
}
