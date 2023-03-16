function solution(s) {
  let tem = [s[0]];
  for (let i = 1; i < s.length; i++) {
    s[i] === tem[tem.length - 1] ? tem.pop() : tem.push(s[i]);
  }

  return tem.length === 0 ? 1 : 0;
}
