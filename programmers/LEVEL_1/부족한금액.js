//풀이 1
function solution1(price, money, count) {
  let array = [];
  for (let i = 1; i <= count; i++) {
    array.push(price * i);
  }
  let accMoney = array.reduce((acc, cur) => acc + cur, 0);

  return money >= accMoney ? 0 : Math.abs(money - accMoney);
}

//풀이 2
function solution2(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
