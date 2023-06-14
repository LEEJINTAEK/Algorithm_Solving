function solution(s) {
  let sMap = new Map();
  let sArray = [];
  let sTmp = "";
  for (let i = 2; i < s.length; i++) {
    if (s[i] >= 0) {
      sTmp += s[i];
    } else {
      if (s[i - 1] >= 0) {
        sArray.push(sTmp);
        sTmp = "";
      }
    }
  }
  for (const n of sArray) {
    sMap.has(n) ? sMap.set(n, sMap.get(n) + 1) : sMap.set(n, 1);
  }
  let answer = [];
  for (const x of sMap.entries()) {
    answer.push(x);
  }
  return answer.sort((a, b) => b[1] - a[1]).map((x) => +x[0]);
}
