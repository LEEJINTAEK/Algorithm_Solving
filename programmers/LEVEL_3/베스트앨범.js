function solution(genres, plays) {
  const genresPlay = new Map();
  const playsArray = [];
  for (let i = 0; i < genres.length; i++) {
    const playsIdx = {};
    genresPlay.set(genres[i], (genresPlay.get(genres[i]) || 0) + plays[i]);
    playsIdx[genres[i]] = [plays[i], i];
    playsArray.push(playsIdx);
  }

  const genresSort = [...genresPlay].sort((a, b) => b[1] - a[1]);

  playsArray.sort((a, b) => {
    const genreA = Object.keys(a)[0];
    const genreB = Object.keys(b)[0];

    const playsA = a[genreA][0];
    const playsB = b[genreB][0];

    return playsB - playsA;
  });

  const answer = [];
  for (const genre of genresSort) {
    let limit = 0;
    for (const play of playsArray) {
      if (play[genre[0]] && limit < 2) {
        answer.push(play[genre[0]][1]);
        limit += 1;
      }
    }
  }

  return answer;
}
