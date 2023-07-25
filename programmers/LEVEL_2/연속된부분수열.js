//해결 1
function solution(sequence, k) {
  let lp = 0;
  let rp = 0;
  let sum = sequence[0];
  let minLen = Infinity;
  let result = [];

  while (lp <= rp && rp < sequence.length) {
    if (sum === k) {
      if (rp - lp + 1 < minLen) {
        minLen = rp - lp + 1;
        result = [lp, rp];
      }
      sum += sequence[++rp];
    } else if (sum < k) {
      sum += sequence[++rp];
    } else {
      sum -= sequence[lp++];
    }
  }

  return result;
}

//시간초과
function solution(sequence, k) {
  let lp = 0;
  let sum = 0;
  let tmp1 = [];
  let answer = new Map();
  for (let rp = 0; rp < sequence.length; rp++) {
    sum += sequence[rp];
    tmp1.push(sequence[rp]);
    if (sum === k) {
      answer.set([lp, rp], tmp1.length);
    }
    while (sum >= k) {
      sum -= sequence[lp];
      lp += 1;
      tmp1.shift();
      if (sum === k) {
        answer.set([lp, rp], tmp1.length);
      }
    }
  }
  let arr = [];
  for (const el of answer.entries()) {
    arr.push(el);
  }
  return arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return;
    }
    return a[1] - b[1];
  })[0][0];
}
