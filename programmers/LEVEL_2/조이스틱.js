function solution(name) {
  let total = 0;
  const len = name.length;
  let minMove = len - 1;
  for (let i = 0; i < len; i++) {
    total += Math.min(
      name[i].charCodeAt() - "A".charCodeAt(),
      "Z".charCodeAt() - name[i].charCodeAt() + 1
    );

    let next = i + 1;
    while (next < len && name[next] === "A") {
      next += 1;
    }

    minMove = Math.min(minMove, i + len - next + Math.min(i, len - next));
  }

  return total + minMove;
}
