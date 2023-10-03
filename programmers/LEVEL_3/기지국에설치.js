function solution(n, stations, w) {
  let startIdx = 0;
  let cnt = 0; //정답 갯수
  for (const station of stations) {
    const startCoverage = station - w - 1; //기지국 범위 첫 아파트 인덱스
    cnt += Math.ceil((startCoverage - startIdx) / (w * 2 + 1)); //설치 필요 갯수 추가
    startIdx = station + w; // 다음 시작 인덱스
  }
  //아파트가 남았을 때
  cnt += Math.ceil((n - startIdx) / (w * 2 + 1));

  return cnt;
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
