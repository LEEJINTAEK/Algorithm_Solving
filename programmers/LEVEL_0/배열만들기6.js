function solution(arr) {
  let i = 0;
  let stk = [];
  while (i < arr.length) {
    if (stk[0] === undefined) {
      stk.push(arr[i]);
      i += 1;
    } else if (stk[stk.length - 1] === arr[i]) {
      stk.pop();
      i += 1;
    } else if (stk[stk.length - 1] !== arr[i]) {
      stk.push(arr[i]);
      i += 1;
    }
  }

  return stk[0] === undefined ? [-1] : stk;
}
