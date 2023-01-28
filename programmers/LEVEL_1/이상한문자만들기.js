//풀이 1
function solution(s) {
  return s
    .split(" ")
    .map((x) =>
      x
        .split("")
        .map((n, i) => (i % 2 === 0 ? n.toUpperCase() : n.toLowerCase()))
        .join("")
    )
    .join(" ");
}

//풀이 2
function solution2(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
