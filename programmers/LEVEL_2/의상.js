function solution(clothes) {
  const map = new Map();
  for (const el of clothes) {
    map.set(el[1], (map.get(el[1]) || 0) + 1);
  }
  let cnt = 1;
  for (const el of map.values()) {
    cnt += cnt * el;
  }
  return cnt - 1;
}
