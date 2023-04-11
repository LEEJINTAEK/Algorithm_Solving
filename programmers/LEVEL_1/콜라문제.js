function solution(a, b, n) {
  let colaSave = 0;
  while (n >= a) {
    colaSave = colaSave + parseInt(n / a) * b;
    n = parseInt(n / a) * b + parseInt(n % a);
  }

  return colaSave;
}
