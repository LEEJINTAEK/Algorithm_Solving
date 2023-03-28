// 가까운 수

//풀이 1
function solution1(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}

//풀이 2
function solution2(array, n) {
  let index = 0;
  let answerIndex;
  let compare = Number.MAX_SAFE_INTEGER;
  for (let x of array.sort((a, b) => a - b)) {
    let distance = Math.abs(n - x);
    if (compare > distance) {
      compare = distance;
      answerIndex = index;
    }
    index += 1;
  }

  return array[answerIndex];
}
