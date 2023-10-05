function solution(sticker) {
  const len = sticker.length;

  if (len === 1) {
    return sticker[0];
  }

  //스티커 첫 번째 뜯는 경우
  const dp1 = Array(len - 1).fill(0);

  dp1[0] = sticker[0];
  dp1[1] = sticker[0];

  for (let i = 2; i < len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
  }

  //스티커 첫 번째 뜯지 않을 경우
  const dp2 = Array(len).fill(0);

  dp2[0] = 0;
  dp2[1] = sticker[1];

  for (let i = 2; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}
