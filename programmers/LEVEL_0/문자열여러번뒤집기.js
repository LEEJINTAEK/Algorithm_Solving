function solution(my_string, queries) {
  queries.forEach(
    (query) =>
      (my_string = my_string.replace(
        my_string.slice(query[0], query[1] + 1),
        [...my_string.slice(query[0], query[1] + 1)].reverse().join("")
      ))
  );
  return my_string;
}
