function solution(s) {
  s = s.split("");
  let correct = 0;
  for (let i = 0; i < s.length; i++) {
    let tmp = [s[0]];
    for (let ch = 1; ch < s.length; ch++) {
      if (s[ch] === "(" || s[ch] === "{" || s[ch] === "[") {
        tmp.push(s[ch]);
      } else {
        if (tmp[tmp.length - 1] === "(" && s[ch] === ")") {
          tmp.pop();
        }
        if (tmp[tmp.length - 1] === "[" && s[ch] === "]") {
          tmp.pop();
        }
        if (tmp[tmp.length - 1] === "{" && s[ch] === "}") {
          tmp.pop();
        }
      }
    }
    if (tmp.length === 0) {
      correct += 1;
    }
    s.push(s.shift());
  }

  return correct;
}
