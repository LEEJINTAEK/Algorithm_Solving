function solution(want, number, discount) {
  let day = 0;
  let list = new Map();
  for (let i = 0; i < want.length; i++) {
    list.set(want[i], number[i]);
  }
  for (let i = 0; i <= discount.length - 10; i++) {
    let dcList = new Map();
    for (let j = i; j < i + 10; j++) {
      dcList.has(discount[j])
        ? dcList.set(discount[j], dcList.get(discount[j]) + 1)
        : dcList.set(discount[j], 1);
    }
    let possible = 1;
    for (const [key, value] of list) {
      if (dcList.has(key)) {
        if (value > dcList.get(key)) {
          possible = 0;
          break;
        }
      } else {
        possible = 0;
        break;
      }
    }
    if (possible) {
      day += 1;
    }
  }

  return day;
}
