function solution(arr) {
  let tmp = arr;
  let repeat = 0;

  while (1) {
    arr = arr.map((n) => {
      if (n % 2 === 0 && n >= 50) {
        return n / 2;
      }
      if (n % 2 !== 0 && n < 50) {
        return n * 2 + 1;
      }
      return n;
    });
    repeat += 1;
    if (arr.slice().join("") === tmp.slice().join("")) {
      return repeat - 1;
    } else {
      tmp = arr;
    }
  }
}
