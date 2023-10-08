function solution(n, k) {
  const factorial = (num) => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
  };

  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const answer = [];

  k -= 1; // k는 1부터 시작하지만 인덱스는 0부터 시작

  while (numbers.length > 0) {
    const fact = factorial(numbers.length - 1); // (n-1)! 계산
    const index = Math.floor(k / fact); // 인덱스 계산
    answer.push(numbers.splice(index, 1)[0]); // 해당 인덱스의 숫자를 answer 배열에 추가
    k %= fact; // 나머지 k 계산
  }

  return answer;
}
