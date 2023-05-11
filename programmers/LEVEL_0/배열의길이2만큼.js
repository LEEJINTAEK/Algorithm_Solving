function solution(arr) {
  let minLength = 1;
  while (minLength < arr.length) {
    minLength *= 2;
  }
  while (arr.length !== minLength) {
    arr.push(0);
  }

  return arr;
}
