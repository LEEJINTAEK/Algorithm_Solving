function check(s, r, l, str) {
  while (l >= 0 && r < s.length && s[r] === s[l]) {
    str += s[r] + s[l];
    r += 1;
    l -= 1;
  }

  return str;
}

function solution(s) {
  let answer = 1;

  for (let i = 0; i < s.length - 1; i++) {
    const str1 = check(s, i + 1, i - 1, s[i]);
    answer = Math.max(answer, str1.length);

    if (s[i] === s[i + 1]) {
      const str2 = check(s, i + 2, i - 1, s[i] + s[i + 1]);
      answer = Math.max(answer, str2.length);
    }
  }

  return answer;
}
