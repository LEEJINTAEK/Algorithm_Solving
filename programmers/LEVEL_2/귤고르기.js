function solution(k, tangerine) {
  let box = new Map();
  tangerine.forEach((size) =>
    box.has(size) ? box.set(size, box.get(size) + 1) : box.set(size, 1)
  );
  let tangerineBox = [];
  for (const key of box.entries()) {
    tangerineBox.push(key);
  }
  tangerineBox.sort((a, b) => b[1] - a[1]);

  let type = 0;
  let cnt = 0;
  for (const tangerines of tangerineBox) {
    cnt += tangerines[1];
    type += 1;
    if (cnt >= k) {
      return type;
    }
  }
}
