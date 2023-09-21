function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let win = 0;
  let aIdx = 0;
  let bIdx = 0;

  while (aIdx < A.length && bIdx < B.length) {
    if (A[aIdx] < B[bIdx]) {
      win += 1;
      aIdx += 1;
      bIdx += 1;
    } else {
      bIdx += 1;
    }
  }
  return win;
}

//시간초과!! 시간복잡도O(n^2)
function solutionTimeOut(A, B) {
  const check = Array(A.length).fill(false);
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let cnt = 0;
  while (B.length) {
    const n = B.shift();
    for (let i = 0; i < A.length; i++) {
      if (A[i] < n && !check[i]) {
        cnt += 1;
        check[i] = true;
        break;
      }
      if (i === A.length - 1) {
        check[i] = true;
      }
    }
  }

  return cnt;
}
