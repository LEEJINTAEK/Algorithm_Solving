function solution(lines) {
  const line = Array(200).fill(0);

  for (const [s, e] of lines) {
    for (let i = s + 100; i < e + 100; i++) {
      line[i] += 1;
    }
  }

  return line.filter((n) => n > 1).length;
}
