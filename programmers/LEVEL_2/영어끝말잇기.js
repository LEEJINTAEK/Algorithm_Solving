//풀이 1
function solution1(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer =
      answer ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
        ? idx
        : answer);
    return now[now.length - 1];
  }, "");

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}

//풀이 2
function solution2(n, words) {
  let speak = new Map();
  let cnt = 1;
  let person = 1;

  //언급되었을때
  for (const word of words) {
    if (speak.has(word)) {
      return [person, cnt];
    } else {
      speak.set(word, 1);
    }
    person += 1;
    if (person > n) {
      cnt += 1;
      person = 1;
    }
  }
  //틀렸을 때
  cnt = 1;
  person = 2;

  for (let i = 1; i <= words.length - 1; i++) {
    if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      return [person, cnt];
    }
    person += 1;
    if (person > n) {
      cnt += 1;
      person = 1;
    }
  }

  //통과
  return [0, 0];
}
