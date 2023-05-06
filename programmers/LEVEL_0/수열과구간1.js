function solution(arr, queries) {
  queries.forEach((index) => {
    for (let i = index[0]; i <= index[1]; i++) {
      arr[i] += 1;
    }
  });
  return arr;
}
