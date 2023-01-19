//팩토리얼

// 풀이 1
function solution(n) {
  let value = 1;
  let answer = 0;
  while (true) {
    answer++;
    value = value * answer;
    if (value > n) {
      return answer - 1;
    }
  }
}

// 풀이 2
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}
