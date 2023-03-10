//카드뭉치

//풀이1

function solution1(cards1, cards2, goal) {
  for (const s of goal) {
    let result = [];
    let tem;
    if (cards1[0] === s) {
      tem = cards2.shift();
    }
    if (cards2[0] === s) {
      tem = cards2.shift();
    }
    result.push(tem);
  }

  return result.join("") === goal.join("") ? "Yes" : "No";
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
