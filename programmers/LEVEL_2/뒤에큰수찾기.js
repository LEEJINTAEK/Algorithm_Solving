//풀이 1(stack)
function solution(numbers) {
  const answer = Array.from({ length: numbers.length }, () => -1);
  const indexStack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (
      indexStack.length > 0 &&
      numbers[i] > numbers[indexStack[indexStack.length - 1]]
    ) {
      const index = indexStack.pop();
      answer[index] = numbers[i];
    }
    indexStack.push(i);
  }

  return answer;
}

//실행시간 초과! O(n^2)
function solutionError(numbers) {
  const answer = [];
  const length = numbers.length;

  for (let i = 0; i < length - 1; i++) {
    let compare = true;
    let check = 0;

    for (let j = i + 1, k = length - 1; j < length; j++, k--) {
      if (numbers[i] < numbers[j]) {
        answer.push(numbers[j]);
        compare = false;
        break;
      }

      if (numbers[i] < numbers[k]) {
        check = k;
      }

      if (j === k) {
        if (check !== 0) {
          answer.push(numbers[check]);
          compare = false;
        }
        break;
      }
    }

    if (compare) {
      answer.push(-1);
    }
  }

  answer.push(-1);

  return answer;
}
