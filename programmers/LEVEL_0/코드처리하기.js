function solution(code) {
  let mode = false;
  let answer = "";
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = !mode;
    } else {
      if (mode && i % 2 !== 0) {
        answer += code[i];
      }
      if (!mode && i % 2 === 0) {
        answer += code[i];
      }
    }
  }

  return answer || "EMPTY";
}
