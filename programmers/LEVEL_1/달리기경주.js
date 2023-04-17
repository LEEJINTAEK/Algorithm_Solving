// 실행시간 초과

function solutionError2(players, callings) {
  callings.map((call) => {
    let seq = players.indexOf(call);
    [players[seq - 1], players[seq]] = [players[seq], players[seq - 1]];
  });

  return players;
}

function solutionError1(players, callings) {
  for (const call of callings) {
    let seq = players.indexOf(call);
    [players[seq - 1], players[seq]] = [players[seq], players[seq - 1]];
  }

  return players;
}
