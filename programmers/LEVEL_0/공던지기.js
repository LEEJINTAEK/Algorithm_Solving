//풀이 1
function solution1(numbers, k) {
  return numbers[(2 * (k - 1)) % numbers.length];
}

//풀이 2

function solution(numbers, k) {
  let i = 0;
  let count = 1;
  while (1) {
    if (count === k) {
      return numbers[i];
    }
    if (i === numbers.length - 1) {
      i = -1;
    }
    if (i === numbers.length - 2) {
      i = -2;
    }
    count += 1;
    i += 2;
  }
}
