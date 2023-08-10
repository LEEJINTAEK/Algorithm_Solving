function solution(orders, course) {
  const answer = [];

  for (const len of course) {
    const courseCandidates = {}; // 코스요리 메뉴 후보들을 저장할 객체
    for (const order of orders) {
      const menuList = order.split("").sort();
      const combinations = getCombinations(menuList, len); // 조합 함수 호출
      for (const combination of combinations) {
        const courseMenu = combination.join(""); // 조합된 메뉴 문자열 생성
        courseCandidates[courseMenu] = (courseCandidates[courseMenu] || 0) + 1;
      }
    }

    const candidates = Object.keys(courseCandidates).filter(
      (menu) => courseCandidates[menu] >= 2
    );
    if (candidates.length > 0) {
      const maxCount = Math.max(
        ...candidates.map((menu) => courseCandidates[menu])
      );
      for (const candidate of candidates) {
        if (courseCandidates[candidate] === maxCount) {
          answer.push(candidate);
        }
      }
    }
  }

  return answer.sort();
}

// 조합을 생성하는 함수
function getCombinations(arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}
