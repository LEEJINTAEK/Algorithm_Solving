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

function compareMaps(map1, map2) {
  //사이즈 비교
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    //key값 비교, 갯수비교
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let sH = new Map();
  let tH = new Map();
  let answer = 0;
  //tH 세팅
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  //sH 세팅
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  //sH추가, 비교, 삭제
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    //추가
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    //비교
    if (compareMaps(sH, tH)) {
      answer++;
    }
    //삭제
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
