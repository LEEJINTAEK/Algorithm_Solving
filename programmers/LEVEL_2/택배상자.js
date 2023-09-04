function solution(order) {
  let cnt = 0;
  const container = [];
  let box = 1;
  for (const i of order) {
    let flag = false;
    while (1) {
      if (container.length === 0) {
        container.push(box);
        box += 1;
      }

      if (i > container.at(-1)) {
        container.push(box);
        box += 1;
      } else if (i === container.at(-1)) {
        cnt += 1;
        container.pop();
        flag = true;
        break;
      } else {
        break;
      }
    }
    if (!flag) {
      break;
    }
  }

  return cnt;
}
