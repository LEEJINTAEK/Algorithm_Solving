//해결 1 (every, some 이용하기) << 해결2 보다 성능과 가독성 업
function solution(arrayA, arrayB) {
  return getAnswer(arrayA, arrayB) > getAnswer(arrayB, arrayA)
    ? getAnswer(arrayA, arrayB)
    : getAnswer(arrayB, arrayA);
}
function getAnswer(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  for (let i = arr1[0]; i > 1; i--) {
    if (arr1.every((x) => x % i === 0) && arr2.every((x) => x % i !== 0)) {
      return i;
    }
  }
  return 0;
}

//해결 2
function solution1(arrayA, arrayB) {
  const array = [arrayA[0], arrayB[0]].sort((a, b) => a - b);
  arrayA.sort((a, b) => b - a);
  arrayB.sort((a, b) => b - a);
  const len = arrayA.length;
  let answer = 0;

  while (array.length) {
    const minNum = array.shift();
    for (let i = minNum; i > 0; i--) {
      let cntA = 0;
      let cntB = 0;
      for (let j = 0; j < len; j++) {
        if (
          (arrayA[j] % i !== 0 && arrayB[j] % i !== 0) ||
          (arrayA[j] % i === 0 && arrayB[j] % i === 0)
        ) {
          break;
        }
        if (arrayA[j] % i === 0) {
          cntA += 1;
        }
        if (arrayB[j] % i === 0) {
          cntB += 1;
        }
      }
      if ((cntA === len && cntB === 0) || (cntB === len && cntA === 0)) {
        answer = Math.max(answer, i);
      }
    }
  }
  return answer;
}
