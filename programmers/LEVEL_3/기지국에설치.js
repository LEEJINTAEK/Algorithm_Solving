function solution(n, stations, w) {
  const coverage = 2 * w + 1; // 기지국이 커버하는 범위
  let answer = 0;
  let position = 1; // 아파트의 위치

  for (const station of stations) {
    const leftCoverage = station - w - position; //커버 범위 전 왼쪽

    if (leftCoverage > 0) {
      // 왼쪽 아파트에 기지국 설치가 필요한 경우
      answer += Math.ceil(leftCoverage / coverage);
    }

    position = station + w + 1; // 다음 아파트 위치 설정
  }

  if (position <= n) {
    // 남은 아파트가 있는 경우
    const remainingCoverage = n - position + 1;
    answer += Math.ceil(remainingCoverage / coverage);
  }

  return answer;
}

//실행시간 초과
function timeOut(n, stations, w) {
  const apartments = Array(n).fill(false);
  //전파 가능
  for (const station of stations) {
    const installIdx = station - 1;
    apartments[installIdx] = true;
    // 오른쪽으로 설치
    for (let i = installIdx; i <= installIdx + w && i < n; i++) {
      apartments[i] = true;
    }

    // 왼쪽으로 설치
    for (let j = installIdx; j >= installIdx - w && j >= 0; j--) {
      apartments[j] = true;
    }
  }
  let needed = 0; //정답
  let impossibleLen = 0; //false 길이
  let curIdx = 0; //현재 인덱스
  let flag = true; //true false 판별
  while (curIdx < n) {
    if (apartments[curIdx] && !flag) {
      flag = true;
      needed += Math.ceil(impossibleLen / (2 * w + 1));
      impossibleLen = 0;
    }
    if (!apartments[curIdx]) {
      impossibleLen += 1;
      flag = false;
    }
    curIdx += 1;
    if (curIdx === n) {
      needed += Math.ceil(impossibleLen / (2 * w + 1));
    }
  }

  return needed;
}
