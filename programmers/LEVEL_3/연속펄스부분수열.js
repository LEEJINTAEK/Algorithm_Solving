function solution(sequence) {
  const len = sequence.length;

  let sum1 = 0;
  let sum2 = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < len; i++) {
    sum1 = Math.max(0, sum1) + sequence[i] * (i % 2 === 0 ? 1 : -1);
    sum2 = Math.max(0, sum2) + sequence[i] * (i % 2 === 0 ? -1 : 1);

    maxSum = Math.max(maxSum, sum1, sum2);
  }

  return maxSum;
}
