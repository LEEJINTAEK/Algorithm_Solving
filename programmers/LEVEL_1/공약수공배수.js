//풀이 1
function solution1(n, m) {
  let max = 0;
  let min = 0;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }
  for (let i = 2; i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      min = i;
      return [max, min];
    }
  }
}

//풀이 2
function solution2(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
