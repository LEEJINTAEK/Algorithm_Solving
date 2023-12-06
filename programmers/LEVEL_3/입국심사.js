function solution(n, times) {
  times.sort((a, b) => a - b);
  let [left, right] = [1, times[times.length - 1] * n];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let possible = 0;

    for (const time of times) {
      possible += Math.floor(mid / time);
    }

    if (possible >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
