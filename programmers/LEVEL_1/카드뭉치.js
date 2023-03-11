//카드뭉치

//풀이1

function solution1(cards1, cards2, goal) {
  let answer = "Yes";
  for (const word of goal) {
    cards1[0] === word
      ? cards1.shift()
      : cards2[0] === word
      ? cards2.shift()
      : (answer = "No");
  }

  return answer;
}
