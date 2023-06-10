function solution1(clothes) {
  let map = new Map();
  for (const x of clothes) {
    map.has(x[1]) ? map.set(x[1], map.get(x[1]) + 1) : map.set(x[1], 1);
  }
  let cal = 1;
  for (const value of map.values()) {
    cal = cal * (value + 1);
  }

  return cal - 1;
}
