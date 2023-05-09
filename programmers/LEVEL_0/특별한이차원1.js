function solution(n) {
  return Array.from({ length: n }, (x, i) =>
    Array.from({ length: n }, () => 0).map((y, index) =>
      index === i ? (y = 1) : y
    )
  );
}
