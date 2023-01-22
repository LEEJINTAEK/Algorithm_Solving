function solution(x) {
  let acc = x
    .toString()
    .split("")
    .reduce((pre, cur) => +pre + +cur, 0);
  return x % acc === 0 ? true : false;
}
