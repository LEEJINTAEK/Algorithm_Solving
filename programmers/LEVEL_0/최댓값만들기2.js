//최댓값 만들기(2)

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  let length = numbers.length;
  return Math.max(
    numbers[0] * numbers[1],
    numbers[length - 1] * numbers[length - 2]
  );
}
