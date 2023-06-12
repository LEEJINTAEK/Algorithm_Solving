function solution(priorities, location) {
  const prior = priorities.slice().sort((a, b) => b - a);
  let cnt = 1;
  let process = prior.shift();
  while (1) {
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] === process) {
        if (i === location) {
          return cnt;
        }
        process = prior.shift();
        cnt += 1;
      }
    }
  }
}
