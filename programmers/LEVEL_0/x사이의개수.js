function solution(myString) {
  let count = 0;
  let answer = [];
  for (const str of myString) {
    if (str === "x") {
      answer.push(count);
      count = 0;
    } else {
      count += 1;
    }
  }
  answer.push(count);

  return answer;
}
