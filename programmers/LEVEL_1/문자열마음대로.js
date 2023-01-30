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
function solution2(strings, n) {
  var answer = [];
  strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (b[n] > a[n]) {
      return -1;
    } else if (a[n] == b[n]) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return strings;
}
