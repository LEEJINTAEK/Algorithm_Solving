//최댓값 만들기(1)

//풀이 1
function solution(numbers) {
  let pop1 = numbers.sort((a, b) => a - b).pop();
  return numbers.pop() * pop1;
}

//풀이 2
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
