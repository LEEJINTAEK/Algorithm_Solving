//문제 1
function check(pre, cur) {
  let i = Math.max(pre, cur);
  while (1) {
    if (i % cur === 0 && i % pre === 0) {
      return i;
    }
    i += 1;
  }
}
function solution1(arr) {
  arr.sort((a, b) => a - b);
  let pre = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let min = check(pre, arr[i]);
    pre = min;
  }
  return pre;
}

//문제 2
function solution2(arr) {
  return arr.reduce((acc, cur) => {
    const recursive = (min, max) => {
      return min % max === 0 ? max : recursive(max, min % max);
    };

    let max = 0;
    return (acc * cur) / recursive(acc, cur);
  });
}
