function solution(sequence, k) {
  let leftPoint = 0;
  let rightPoint = 0;
  let minLength = Number.MAX_SAFE_INTEGER;
  let answerIdx = [];
  let sum = sequence[0];

  while (leftPoint <= rightPoint && rightPoint < sequence.length) {
    if (sum === k) {
      if (rightPoint - leftPoint + 1 < minLength) {
        minLength = rightPoint - leftPoint + 1; //최소 길이 재할당
        answerIdx = [leftPoint, rightPoint];
      }
      rightPoint += 1;
      sum += sequence[rightPoint];
    } else {
      if (sum < k) {
        rightPoint += 1;
        sum += sequence[rightPoint];
      } else {
        sum -= sequence[leftPoint];
        leftPoint += 1;
      }
    }
  }

  return answerIdx;
}
