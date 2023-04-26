function solution(myString, pat) {
  return [...myString]
    .map((alph) => (alph === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
}
