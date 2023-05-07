function solution1(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 2) {
      return arr.slice(arr.indexOf(2), i + 1);
    }
  }

  return [-1];
}

function solution2(arr) {
  return arr.indexOf(2) !== -1
    ? arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1)
    : [-1];
}
