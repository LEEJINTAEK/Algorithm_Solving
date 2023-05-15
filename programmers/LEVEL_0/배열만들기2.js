function solution(l, r) {
  let number = l - 1;
  let arr = Array.from({ length: r }, () => (number += 1))
    .map((n) =>
      n
        .toString()
        .split("")
        .filter((n) => n === "0" || n === "5")
        .join("")
    )
    .map((n) => +n);

  return [...new Set(arr)].filter((n) => n >= l && n <= r)[0] !== undefined
    ? [...new Set(arr)].filter((n) => n >= l && n <= r)
    : [-1];
}
