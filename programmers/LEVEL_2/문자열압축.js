function solution(s) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= Math.floor(s.length / 2) + 1; i++) {
    const map = new Map();
    let tmp = "";
    for (let j = 0; j < s.length; j += i) {
      const str = s.slice(j, j + i);
      if (j === 0) {
        map.set(str, 1);
        continue;
      }
      const prev = [...map].flat()[0];
      if (prev === str) {
        map.set(str, map.get(str) + 1);
      } else {
        const cnt = map.get(prev) > 1 ? map.get(prev) : "";
        tmp += cnt + prev;
        map.clear();
        map.set(str, 1);
      }
    }
    const lastStr = [...map].flat()[0];
    const lastCnt = map.get(lastStr) > 1 ? map.get(lastStr) : "";
    tmp += lastCnt + lastStr;
    answer = Math.min(answer, tmp.length);
  }

  return answer;
}
