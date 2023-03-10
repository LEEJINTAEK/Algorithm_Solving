//카드뭉치

//풀이1

function solution1(cards1, cards2, goal) {
  let answer = "Yes";
  for (const word of goal) {
    cards1[0] === word
      ? cards2.shift()
      : cards2[0] === word
      ? cards2.shift()
      : (answer = "No");
  }

  return answer;
}

//다른 풀이2

function solution2(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] === s) {
      cards2.shift();
    } else if (cards2[0] === s) {
      cards2.shift();
    } else {
      return "no";
    }
  }

  return "yes";
}
