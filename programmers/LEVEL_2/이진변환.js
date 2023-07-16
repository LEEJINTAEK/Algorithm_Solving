//풀이 1
function solution(s) {
  let answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}

//풀이 2
function solution2(s) {
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
