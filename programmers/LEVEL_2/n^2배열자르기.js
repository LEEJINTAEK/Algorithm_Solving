//풀이 1
function solution1(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}

//풀이2
function solution2(n, left, right) {
  const answer = [];
  let currRow = Math.floor(left / n);
  let currCol = left % n;

  for (let i = left; i <= right; i++) {
    result.push(Math.max(currRow, currCol) + 1);
    if (currCol === n - 1) {
      currRow++;
      currCol = 0;
    } else {
      currCol++;
    }
  }

  return answer;
}

//시간 에러
function solutionError(n, left, right) {
  let arr = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => Math.max(i, j) + 1)
  );

  arr = arr.flatMap((x) => x.slice(0, x.length));

  return arr.slice(left, right + 1);
}

//오답
function solutionFail(n, left, right) {
  let arr = Array.from({ length: n }, () =>
    Array.from({ length: n }, (_, i) => i + 1)
  );
  arr = arr.map((x, i) => {
    if (i > 0) {
      for (let k = 0; k < i; k++) {
        x[k] = x[i];
      }
    }
    return x;
  });
  return arr;
}
