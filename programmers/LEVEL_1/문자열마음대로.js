// > 0	a 후에b
// 0 미만	a 전에b
// === 0	의 a ★★★★★★★★★★★★★★★★★」b

//풀이 1
function solution1(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}
//풀이 2
function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? (a > b ? 1 : -1) : a[n].charCodeAt() - b[n].charCodeAt()
  );
}
