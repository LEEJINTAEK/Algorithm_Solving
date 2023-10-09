function solution(storey) {
  if (storey < 5) {
    return storey;
  }

  const remainder = storey % 10;
  const quotient = Math.floor(storey / 10);

  return Math.min(
    remainder + solution(quotient),
    10 - remainder + solution(quotient + 1)
  );
}

function solution(storey) {
  let cnt = 0;
  while (storey !== 0) {
    const remainder = storey % 10;

    if (remainder >= 6) {
      cnt += 10 - remainder;
      storey += 10 - remainder;
    } else if (remainder === 5 && Math.floor(storey / 10) % 10 >= 5) {
      cnt += remainder;
      storey += remainder;
    } else {
      cnt += remainder;
    }

    storey = Math.floor(storey / 10);
  }

  return cnt;
}
