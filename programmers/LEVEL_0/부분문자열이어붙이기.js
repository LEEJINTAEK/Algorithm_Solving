function solution(my_strings, parts) {
  let string = "";
  my_strings.map(
    (str, i) => (string += str.slice(parts[i][0], parts[i][1] + 1))
  );
  return string;
}
