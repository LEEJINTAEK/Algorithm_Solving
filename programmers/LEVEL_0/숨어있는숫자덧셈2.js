function solution(my_string) {
  return my_string
    .toUpperCase()
    .replace(/[A-Z]/g, " ")
    .split(" ")
    .map((x) => +x)
    .reduce((acc, cur) => acc + cur, 0);
}
