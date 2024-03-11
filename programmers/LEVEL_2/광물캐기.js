function solution(picks, minerals) {
  let answer = Number.MAX_SAFE_INTEGER;

  function dfs(pick, total, cur) {
    const pickax = getPickax(pick);
    let sum = total;

    for (let i = cur; i < cur + 5; i++) {
      if (i === minerals.length) {
        answer = Math.min(answer, sum);
        return;
      }
      const mineral = minerals[i];

      if (pickax === "diamond") {
        sum += 1;
      }
      if (pickax === "iron") {
        mineral === "diamond" ? (sum += 5) : (sum += 1);
      }
      if (pickax === "stone") {
        mineral === "diamond"
          ? (sum += 25)
          : mineral === "iron"
          ? (sum += 5)
          : (sum += 1);
      }
    }

    if (picks.reduce((a, b) => a + b, 0) === 0) {
      answer = Math.min(answer, sum);
      return;
    }

    for (let i = 0; i < picks.length; i++) {
      if (picks[i] > 0) {
        picks[i] -= 1;
        dfs(i, sum, cur + 5);
        picks[i] += 1;
      }
    }
  }

  for (let i = 0; i < picks.length; i++) {
    if (picks[i] > 0) {
      picks[i] -= 1;
      dfs(i, 0, 0);
      picks[i] += 1;
    }
  }

  return answer;
}

function getPickax(idx) {
  if (idx === 0) {
    return "diamond";
  }
  if (idx === 1) {
    return "iron";
  }
  if (idx === 2) {
    return "stone";
  }
}
