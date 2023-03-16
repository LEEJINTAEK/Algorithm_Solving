function solution(n) {
  let sum = 0;
  let count = 0;
  let leftPoint = 1;
  for (let num = 1; num <= n; num++) {
    sum = sum + num;
    while (sum > n) {
      sum = sum - leftPoint;
      leftPoint += 1;
    }

    if (sum === n) {
      count += 1;
    }
  }

  return count;
}
