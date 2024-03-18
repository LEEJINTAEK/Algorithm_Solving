function solution(users, emoticons) {
  let [totalMemberShip, totalSales] = [0, 0];

  return buy(users, emoticons);
}

function buy(users, emoticons) {
  const saleRate = [10, 20, 30, 40];
  const standard = Array.from({ length: users.length }, (_, i) => users[i][1]);
  const answer = [];

  function makeCombination(depth, combination) {
    if (depth === emoticons.length) {
      let totalPrice = Array.from({ length: users.length }, () => 0);

      for (let i = 0; i < emoticons.length; i++) {
        for (let j = 0; j < users.length; j++) {
          const sale = users[j][0];
          if (combination[i] < sale) {
            continue;
          }
          totalPrice[j] += emoticons[i] * (1 - combination[i] / 100);
        }
      }
      let plus = 0;
      let sum = 0;

      for (let i = 0; i < users.length; i++) {
        if (standard[i] <= totalPrice[i]) {
          plus += 1;
        } else {
          sum += totalPrice[i];
        }
      }

      answer.push([plus, sum]);

      return;
    }

    for (let i = 0; i < saleRate.length; i++) {
      makeCombination(depth + 1, [...combination, saleRate[i]]);
    }
  }

  for (let i = 0; i < saleRate.length; i++) {
    makeCombination(1, [saleRate[i]]);
  }

  answer.sort((a, b) => {
    if (b[0] === a[0]) {
      return b[1] - a[1];
    }
    return b[0] - a[0];
  });

  return answer[0];
}

console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
  )
);
