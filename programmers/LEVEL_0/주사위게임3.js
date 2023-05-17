function solution(a, b, c, d) {
  let dice = [a, b, c, d].sort((a, b) => a - b);
  if ([...new Set(dice)].length === 1) {
    return 1111 * a;
  }
  if ([...new Set(dice)].length === 4) {
    return Math.min(a, b, c, d);
  } else {
    let same = [];
    for (let i = 0; i < dice.length; i++) {
      for (let j = i + 1; j < dice.length; j++) {
        if (dice[i] === dice[j]) {
          same.push(dice[i]);
        }
      }
    }
    if (same.length === 3) {
      return Math.pow(10 * same[0] + dice.filter((x) => x !== same[0])[0], 2);
    }
    if (same.length === 2) {
      return (same[0] + same[1]) * Math.abs(same[0] - same[1]);
    }
    if (same.length === 1) {
      return (
        dice.filter((x) => x !== same[0])[0] *
        dice.filter((x) => x !== same[0])[1]
      );
    }
  }
}
