function solution(progresses, speeds) {
  progresses = progresses.map((x, i) => Math.ceil((100 - x) / speeds[i]));

  let release = [];
  let preDay = progresses[0];
  let dayCnt = 1;
  for (let i = 1; i < progresses.length; i++) {
    if (progresses[i] > preDay) {
      release.push(dayCnt);
      dayCnt = 1;
      preDay = progresses[i];
    } else {
      dayCnt += 1;
    }
  }
  release.push(dayCnt);

  return release;
}
