function solution(rank, attendance) {
  let map = new Map();
  const seq = rank.filter((x, i) => attendance[i]).sort((a, b) => a - b);
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i]) {
      map.set(rank[i], i);
    }
  }
  let answer = 0;
  for (const [key, value] of map) {
    if (key === seq[0]) {
      answer += 10000 * value;
    }
    if (key === seq[1]) {
      answer += 100 * value;
    }
    if (key === seq[2]) {
      answer += value;
    }
  }

  return answer;
}
