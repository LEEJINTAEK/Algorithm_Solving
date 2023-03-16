//풀이 1

function solution1(n) {
  let minNumber = n + 1;
  let answer = 0;
  const numOne = n
    .toString(2)
    .split("")
    .filter((x) => x === "1").length;
  while (1) {
    let minNumberOne = minNumber
      .toString(2)
      .split("")
      .filter((x) => x === "1").length;
    if (numOne === minNumberOne) {
      return minNumber;
    }
    minNumber += 1;
  }
}

//풀이 2
function solution2(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution2(n, a + 1);
}
