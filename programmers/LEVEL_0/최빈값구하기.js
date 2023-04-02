//풀이 1

function solution1(array) {
  let max = Number.MIN_SAFE_INTEGER;
  array.sort((a, b) => a - b);
  let answer;
  for (let i = 0; i <= array[array.length - 1]; i++) {
    let count = 0;
    let tmp;
    for (const n of array) {
      if (i === n) {
        count += 1;
        tmp = n;
      }
    }
    if (max === count) {
      answer = -1;
    }
    if (max < count) {
      max = count;
      answer = tmp;
    }
  }

  return answer;
}

//풀이 2
function solution2(array) {
  let map = new Map();
  for (let n of array) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  map = [...map].sort((a, b) => b[1] - a[1]);

  return map.length === 1 || map[0][1] > map[1][1] ? map[0][0] : -1;
}
