function solution(k, d) {
  let cnt = 0;
  for (let i = 0; i <= d; i += k) {
    const y = Math.sqrt(d * d - i * i);
    cnt += Math.floor(y / k) + 1;
  }
  return cnt;
}
