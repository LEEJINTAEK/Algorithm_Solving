function getMultiSet(str) {
  const multiSet = [];
  for (let i = 0; i < str.length - 1; i++) {
    const pair = str.slice(i, i + 2).toLowerCase();
    if (/^[a-zA-Z]+$/.test(pair)) {
      multiSet.push(pair);
    }
  }
  return multiSet;
}

function solution(str1, str2) {
  const multiSet1 = getMultiSet(str1);
  const multiSet2 = getMultiSet(str2);

  if (multiSet1.length === 0 && multiSet2.length === 0) {
    return 65536; // 공집합일 경우 자카드 유사도는 1로 정의
  }

  const set1 = new Map();
  const set2 = new Map();

  multiSet1.forEach((element) => {
    set1.set(element, set1.has(element) ? set1.get(element) + 1 : 1);
  });

  multiSet2.forEach((element) => {
    set2.set(element, set2.has(element) ? set2.get(element) + 1 : 1);
  });

  let intersection = 0;
  let union = 0;

  set1.forEach((value, key) => {
    if (set2.has(key)) {
      intersection += Math.min(value, set2.get(key));
      union += Math.max(value, set2.get(key));
      set2.delete(key);
    } else {
      union += value;
    }
  });

  set2.forEach((value) => {
    union += value;
  });

  const similarity = intersection / union;
  return Math.floor(similarity * 65536);
}

// 예시 테스트
const str1 = "FRANCE";
const str2 = "french";
const result = solution(str1, str2);
console.log(result); // 출력: 16384
