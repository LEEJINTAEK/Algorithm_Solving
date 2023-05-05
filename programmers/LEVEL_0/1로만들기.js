function solution(num_list) {
  return num_list
    .map((n) => {
      let c = 0;
      while (n !== 1) {
        n % 2 === 0 ? (n = n / 2) : (n = (n - 1) / 2);
        c += 1;
      }
      return c;
    })
    .reduce((a, b) => a + b, 0);
}
