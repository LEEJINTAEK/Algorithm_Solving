function solution(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk[0] === undefined) {
      stk.push(arr[i]);
      i += 1;
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i += 1;
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }

  return stk;
}
