// 실행시간 초과

function solutionError2(players, callings) {
  for (const call of callings) {
    let seq = players.indexOf(call);
    [players[seq - 1], players[seq]] = [players[seq], players[seq - 1]];
  }

  return players;
}

function solutionError3(players, callings) {
  callings.map((call) =>
    players.forEach((person, i) => {
      call === person
        ? ([players[i - 1], players[i]] = [players[i], players[i - 1]])
        : 0;
    })
  );

  return players;
}

function solutionError1(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (callings[i] === players[j]) {
        let tmp = players[j];
        players[j] = players[j - 1];
        players[j - 1] = tmp;
      }
    }
  }

  return players;
}
