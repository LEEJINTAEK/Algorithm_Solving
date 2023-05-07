function solution(my_string) {
  const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let alphArray = Array.from({ length: 52 }, () => 0);
  my_string = [...my_string].map((str) => alph.indexOf(str));
  my_string.forEach(
    (i) => (alphArray = alphArray.map((x, index) => (index === i ? x + 1 : x)))
  );

  return alphArray;
}
