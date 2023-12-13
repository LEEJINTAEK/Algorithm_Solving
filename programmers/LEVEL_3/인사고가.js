function solution(scores) {
  const len = scores.length;
  let rank = new Array(len).fill(1);
  let sum = scores.map((arr) => arr[0] + arr[1]);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      if (scores[i][0] < scores[j][0] && scores[i][1] < scores[j][1]) {
        rank[i] = -1;
        break;
      }
    }
  }

  let sorted = sum
    .map((val, idx) => ({ val, idx }))
    .filter((obj) => rank[obj.idx] !== -1)
    .sort((a, b) => b.val - a.val);
  let ranking = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i].val !== sorted[i - 1].val) ranking = i + 1;
    if (sorted[i].idx === 0) return ranking;
  }

  return -1;
}
