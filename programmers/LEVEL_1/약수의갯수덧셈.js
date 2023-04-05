//풀이1
function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count += 1;
      }
    }
    count % 2 === 0 ? (sum += i) : (sum -= i);
  }

  return sum;
}

//풀이2
function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    //제곱근이 정수이면 약수가 홀수
    Number.isInteger(Math.sqrt(i)) ? (sum -= i) : (sum += i);
  }

  return sum;
}
