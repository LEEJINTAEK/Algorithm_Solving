function solution(s) {
  let zeroCnt = 0;
  let convertCnt = 0;
  function binaryCovert(str) {
    let covertStr = str
      .split("")
      .filter((x) => {
        if (x === "1") {
          return true;
        } else {
          zeroCnt += 1;
        }
      })
      .length.toString(2);

    return covertStr;
  }
  while (s !== "1") {
    s = binaryCovert(s);
    convertCnt += 1;
  }

  return [convertCnt, zeroCnt];
}
