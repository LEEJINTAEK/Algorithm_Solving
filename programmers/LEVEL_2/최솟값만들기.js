//풀이 1

function solution(A, B) {
  let sum = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    sum = sum + A[i] * B[i];
  }

  return sum;
}

//reduce 사용
function solution2(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
