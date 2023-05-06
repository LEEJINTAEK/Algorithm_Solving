function solution(ineq, eq, n, m) {
  return (
    eq === "=" ? (ineq === "<" ? n <= m : n >= m) : ineq === "<" ? n < m : n > m
  )
    ? 1
    : 0;
}
