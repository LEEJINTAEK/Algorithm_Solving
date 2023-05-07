function solution1(strArr) {
  strArr = strArr.map((str) => str.length).sort((a, b) => a - b);
  let count = 1;
  let tmp = strArr[0];
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < strArr.length; i++) {
    tmp === strArr[i] ? (count += 1) : (count = 1);

    tmp = strArr[i];
    answer = Math.max(count, answer);
  }

  return answer;
}

function solution2(strArr) {
  const counter = new Map();
  for (const str of strArr) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);
  }

  return Math.max(...counter.values());
}
