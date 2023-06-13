//탐색(DFS)
function solution1(k, dungeons) {
  let maxDungeons = 0;

  function explore(k, dungeons, count) {
    if (count > maxDungeons) {
      maxDungeons = count;
    }
    for (let i = 0; i < dungeons.length; i++) {
      if (k >= dungeons[i][0]) {
        const remain = dungeons.filter((_, index) => index !== i);
        explore(k - dungeons[i][1], remain, count + 1);
      }
    }
  }
  explore(k, dungeons, 0);

  return maxDungeons;
}

//풀이 2

function solution2(k, dungeons) {
  const filtered = dungeons.slice().filter((v) => v[0] <= k);

  let answer = 0;
  for (let i = 0; i < filtered.length; i++) {
    const subAnswer = solution(
      k - filtered[i][1],
      filtered.filter((_, j) => i !== j)
    );
    if (subAnswer + 1 > answer) answer = subAnswer + 1;
  }
  return answer;
}
