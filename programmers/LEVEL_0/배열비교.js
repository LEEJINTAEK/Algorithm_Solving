function solution(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.reduce((a, b) => a + b, 0) > arr2.reduce((a, b) => a + b, 0)
      ? 1
      : arr1.reduce((a, b) => a + b, 0) < arr2.reduce((a, b) => a + b, 0)
      ? -1
      : 0;
  }
  return arr1.length > arr2.length ? 1 : -1;
}
