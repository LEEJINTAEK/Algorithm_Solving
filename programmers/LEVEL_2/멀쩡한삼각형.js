function solution(w, h) {
  let greatestCommon = 1;

  for (let i = 2; i <= Math.min(w, h); i++) {
    if (w % i === 0 && h % i === 0) {
      greatestCommon = i;
    }
  }

  return w * h - (w + h - greatestCommon);
}
