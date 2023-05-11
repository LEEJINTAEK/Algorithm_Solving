function solution(q, r, code) {
  return [...code].filter((x, i) => i % q === r).join("");
}
