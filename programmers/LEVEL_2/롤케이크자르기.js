function solution(topping) {
  const origin = new Map();
  const bro = new Map();

  for (const el of topping) {
    origin.set(el, (origin.get(el) || 0) + 1);
  }

  let cnt = 0;

  for (const el of topping) {
    bro.set(el, (bro.get(el) || 0) + 1);
    origin.set(el, origin.get(el) - 1);

    if (origin.get(el) === 0) {
      origin.delete(el);
    }

    if (bro.size === origin.size) {
      cnt++;
    }

    if (bro.size > origin.size) {
      break;
    }
  }

  return cnt;
}

// 시간초과
function timeOut(topping) {
  const man = [];
  let count = 0;
  while (topping.length > 0) {
    man.push(topping.pop());
    if ([...new Set(topping)].length === [...new Set(man)].length) {
      count += 1;
    }
  }
  return count;
}
