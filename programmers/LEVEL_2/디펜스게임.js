function solution(n, k, enemy) {
  const rounds = []; // 라운드에 사용할 무적권을 저장하는 배열
  let soldiers = n;
  let answer = 0;

  for (let i = 0; i < enemy.length; i++) {
    rounds.push(enemy[i]);
    soldiers -= enemy[i];

    while (soldiers < 0) {
      const maxRound = Math.max(...rounds);
      soldiers += maxRound;
      k -= 1;
      if (k < 0) return answer;
      const index = rounds.indexOf(maxRound);
      rounds.splice(index, 1);
    }

    answer += 1;
  }

  return answer;
}
