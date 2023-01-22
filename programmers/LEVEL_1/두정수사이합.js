//풀이 1

function solution1(a, b) {
  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
}

//풀이 2

function adder(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
