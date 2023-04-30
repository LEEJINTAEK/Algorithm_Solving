function solution(arr, idx) {
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] === 1 && i > idx) {
      return i - 1;
    }
  }
  return -1;
}
