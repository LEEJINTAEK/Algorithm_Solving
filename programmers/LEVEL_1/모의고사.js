//풀이 1
function solution(answers) {
  const person1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let right = [0, 0, 0];
  //정답 맞을 때 right 증가
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === person1[i % person1.length]) right[0]++;
    if (answers[i] === person2[i % person2.length]) right[1]++;
    if (answers[i] === person3[i % person3.length]) right[2]++;
  }
  let answer = [];
  const max = Math.max(right[0], right[1], right[2]);
  for (let i = 0; i < right.length; i++) {
    if (max === right[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

//풀이 2

function solution(answers) {
  let answer = [];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  const a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  const a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  const max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
