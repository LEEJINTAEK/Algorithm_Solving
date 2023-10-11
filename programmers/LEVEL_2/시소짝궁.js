function solution(weights) {
  const dict = {};
  for (let weight of weights) {
    dict[weight] === undefined ? (dict[weight] = 1) : (dict[weight] += 1);
  }
  weights.sort((a, b) => a - b);

  let answer = 0;
  for (let weight of weights) {
    // 1 : 1
    if (dict[weight] > 1) {
      answer += dict[weight] - 1;
    }
    // 3 : 2
    if (dict[weight * (3 / 2)] > 0) {
      answer += dict[weight * (3 / 2)];
    }
    // 4 : 2 -> 2 : 1
    if (dict[weight * 2] > 0) {
      answer += dict[weight * 2];
    }
    // 4 : 3
    if (dict[weight * (4 / 3)] > 0) {
      answer += dict[weight * (4 / 3)];
    }

    // 현재차례가 끝나면 dict[현재차례]에서 -1 해준다.
    // 다음차례에서 현재 weight를 비교대상에서 제외시키기 위해 하나 빼주는 것
    dict[weight] -= 1;
  }
  return answer;
}

//시간 초과
function solution(weights) {
  weights.sort((a, b) => a - b);
  let lp = 0;
  let cnt = 0;
  while (lp < weights.length - 1) {
    for (let i = lp + 1; i < weights.length; i++) {
      const map = new Map();
      //세팅
      for (let j = 2; j <= 4; j++) {
        map.set(weights[lp] * j);
      }
      //확인
      for (let j = 2; j <= 4; j++) {
        if (map.has(weights[i] * j)) {
          cnt += 1;
          break;
        }
      }
    }
    lp += 1;
  }

  return cnt;
}
