//shift사용시 시간초과

function solution(queue1, queue2) {
  let tried = 0,
    queueLength = queue1.length + queue2.length;
  let idx1 = 0,
    idx2 = 0;
  let queue1Sum = queue1.reduce((acc, val) => acc + val, 0);
  let queue2Sum = queue2.reduce((acc, val) => acc + val, 0);

  while (tried < queueLength * 2) {
    if (queue1Sum > queue2Sum) {
      const element = queue1[idx1];
      idx1 += 1;
      queue1Sum -= element;
      queue2Sum += element;
      queue2.push(element);
    } else if (queue1Sum < queue2Sum) {
      const element = queue2[idx2];
      idx2 += 1;
      queue1Sum += element;
      queue2Sum -= element;
      queue1.push(element);
    } else {
      return tried;
    }
    tried += 1;
  }

  return -1;
}
