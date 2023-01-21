function solution(arr) {
  let member = arr.length;
  return arr.reduce((pre, cur) => pre + cur, 0) / member;
}
