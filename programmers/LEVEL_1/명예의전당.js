function solution(k, score) {
  const answer = [];
  const announcedScore = [];

  for (let i = 0; i < score.length; i++) {
    announcedScore.push(score[i]);
    announcedScore.sort((a, b) => b - a);

    if (announcedScore.length >= k) answer.push(announcedScore[k - 1]);
    else answer.push(announcedScore[announcedScore.length - 1]);
  }

  return answer;
}
