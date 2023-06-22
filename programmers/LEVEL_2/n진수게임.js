function solution(n, t, m, p) {
  let game = [];
  for (let i = 0; i <= t * m; i++) {
    game.push(i);
  }
  game = game.map((x) => x.toString(n).toUpperCase().split(""));

  let seq = 1;
  let answer = [];
  for (const num of game) {
    for (let i = 0; i < num.length; i++) {
      if (seq === p) {
        answer.push(num[i]);
      }
      seq === m ? (seq = 1) : (seq += 1);
    }
    if (answer.length > t) {
      break;
    }
  }

  return answer.slice(0, t).join("");
}
