function solution(n, times) {
  let [start, end] = [1, times[times.length - 1] * n];
  let result = 0;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    let possible = 0;
    for (const time of times) {
      possible += Math.floor(mid / time);
    }
    if (possible >= n) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return result;
}
