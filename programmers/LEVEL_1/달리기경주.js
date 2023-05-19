//매핑 이용
function solution(players, callings) {
  const playerMap = {};
  players.forEach((player, index) => {
    playerMap[player] = index;
  });

  callings.forEach((call) => {
    let seq = playerMap[call];
    [players[seq - 1], players[seq]] = [players[seq], players[seq - 1]];

    playerMap[players[seq]] = seq;
    playerMap[players[seq - 1]] = seq - 1;
  });

  return players;
}

// 실행시간 초과(indexOf로 인한 성능 저하)

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
