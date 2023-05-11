function solution(arr) {
  arr.forEach((x) => {
    while (arr.length > x.length) {
      x.push(0);
    }
  });
  while (arr.length !== arr[0].length) {
    arr.push(Array.from({ length: arr[0].length }, () => 0));
  }
  return arr;
}
