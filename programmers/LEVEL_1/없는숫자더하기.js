//풀이 1
function solution(numbers) {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    array.reduce((acc, cur) => acc + cur, 0) -
    numbers.reduce((acc, cur) => acc + cur, 0)
  );
}

//풀이 2
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
