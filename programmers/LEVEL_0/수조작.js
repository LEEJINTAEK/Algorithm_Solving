function solution(numLog) {
  let answer = "";
  for (let i = 1; i < numLog.length; i++) {
    const key = numLog[i] - numLog[i - 1];
    if (key === 1) {
      answer += "w";
    }
    if (key === -1) {
      answer += "s";
    }
    if (key === 10) {
      answer += "d";
    }
    if (key === -10) {
      answer += "a";
    }
  }

  return answer;
}
