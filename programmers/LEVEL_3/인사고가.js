function solution(scores) {
  let rank = 1;

  const check = (arr) => {
    for (let i = 0; i < scores.length; i++) {
      if (scores[i][0] > arr[0] && scores[i][1] > arr[1]) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < scores.length; i++) {
    if (scores[i][0] + scores[i][1] > scores[0][0] + scores[0][1]) {
      if (check(scores[i])) {
        rank += 1;
      }
    }
  }

  for (let i = 0; i < scores.length; i++) {
    if (scores[i][0] > scores[0][0] && scores[i][1] > scores[0][1]) {
      return -1;
    }
  }

  return rank;
}
