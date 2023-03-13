// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
// 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
// ▣ 입력설명
// 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
// S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
// ▣ 출력설명
// S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
// ▣ 입력예제 1
// bacaAacba
// abc
// ▣ 출력예제 1
// 3
// 출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다

function compare(shash, thash) {
  if (shash.size !== thash.size) {
    return false;
  }
  for (const [key, value] of shash) {
    if (!thash.has(key) || thash.get(key) !== value) return false;
  }
  return true;
}

function solution(s, t) {
  let tHash = new Map();
  let sHash = new Map();
  const tL = t.length;
  let lp = 0,
    answer = 0;
  //tHash 생성
  for (const word of t) {
    tHash.has(word) ? tHash.set(word, tHash.get(word) + 1) : tHash.set(word, 1);
  }

  //sHash생성
  for (let word = 0; word < tL - 1; word++) {
    sHash.has(s[word])
      ? sHash.set(s[word], sHash.get(s[word]) + 1)
      : sHash.set(s[word], 1);
  }

  //추가, 비교, 삭제
  for (let rp = tL - 1; rp < s.length; rp++) {
    //추가
    sHash.has(s[rp])
      ? sHash.set(s[rp], sHash.get(s[rp]) + 1)
      : sHash.set(s[rp], 1);

    //비교
    if (compare(sHash, tHash)) {
      answer = answer + 1;
    }

    //삭제
    sHash.set(s[lp], sHash.get(s[lp]) - 1);
    if (sHash.get(s[lp]) === 0) {
      sHash.delete(s[lp]);
    }
    lp = lp + 1;
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
