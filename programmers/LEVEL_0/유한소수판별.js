//풀이1
function solution1(a, b) {
  while (b % 2 === 0) {
    b = b / 2;
  }
  while (b % 5 === 0) {
    b = b / 5;
  }
  return a % b === 0 ? 1 : 2;
}

//풀이2
function solution2(a, b) {
  return (a / b).toString().length > 10 ? 2 : 1;
}
