//슬라이딩 윈도우
function solution(gems) {
  const gemCount = new Set(gems).size; // 총 보석의 종류 수

  const gemMap = new Map(); // 보석의 종류와 갯수를 저장하는 Map

  let start = 0; // 슬라이딩 윈도우의 시작
  let end = 0; // 슬라이딩 윈도우의 끝
  let minLen = Infinity; // 최소 길이를 무한대로 초기화
  let result = [1, gems.length]; // 결과 배열 [시작 진열대 번호, 끝 진열대 번호]

  while (end < gems.length) {
    // 현재 진열대의 보석을 Map에 추가
    gemMap.set(gems[end], gemMap.get(gems[end]) + 1 || 1);

    // 모든 종류의 보석이 최소 1개 이상 있는 구간을 찾음
    while (gemMap.size === gemCount && start <= end) {
      // 현재 구간의 길이를 계산하여 최소 길이와 비교
      if (end - start < minLen) {
        minLen = end - start;
        result = [start + 1, end + 1];
      }

      // 시작 지점을 오른쪽으로 이동하며 보석을 하나씩 제거
      gemMap.set(gems[start], gemMap.get(gems[start]) - 1);
      if (gemMap.get(gems[start]) === 0) {
        gemMap.delete(gems[start]);
      }
      start += 1;
    }

    // 끝 지점을 오른쪽으로 이동
    end += 1;
  }

  return result;
}

//시간 초과
function timeOut(gems) {
  const buySeq = [];
  let idx = 0;
  while (idx < gems.length) {
    let gemSet = [...new Set(gems)];
    const len = gemSet.length;

    for (let i = idx; i < gems.length; i++) {
      gemSet = gemSet.filter((x) => x !== gems[i]);

      if (gemSet.length === 0) {
        buySeq.push([idx + 1, i + 1]);
        break;
      }
    }
    if (len === 1) {
      return buySeq.flat(1);
    }

    idx += 1;
    if (gemSet.length > 0) {
      break;
    }
  }

  let diff = Number.MAX_SAFE_INTEGER;
  let answer;
  for (const [s, e] of buySeq) {
    if (diff > e - s) {
      answer = [s, e];
      diff = e - s;
    }
    if (diff === e - s) {
      answer[0][0] > s ? (answer = [s, e]) : "";
    }
  }

  return answer;
}
